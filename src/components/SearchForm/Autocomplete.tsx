import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteInputChangeReason,
} from "@mui/material/Autocomplete";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTVShows } from "../../store/showsThunks";
import { searchField, selectShows } from "../../store/showsSlice";
import { RootState } from "../../app/store";

const AutoComplete = () => {
  const dispatch = useAppDispatch();
  const tvshows = useAppSelector(selectShows);
  const fieldValue = useAppSelector((state: RootState) => state.shows.field);

  useEffect(() => {
    if (fieldValue.length > 2) {
      dispatch(fetchTVShows(fieldValue));
    }
  }, [fieldValue, dispatch]);

  const onChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: string,
    __: AutocompleteInputChangeReason
  ) => {
    const fieldValue = value;
    dispatch(searchField(fieldValue));
  };

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={tvshows ? tvshows : []}
        getOptionLabel={(option) => option.show.name}
        inputValue={fieldValue}
        onInputChange={onChange}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="name" />}
        renderOption={(_, option) => (
          <div key={option.show.id}>{option.show.name}</div>
        )}
      />
    </>
  );
};

export default AutoComplete;
