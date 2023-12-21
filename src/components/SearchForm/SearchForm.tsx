import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTVShows } from "../../store/showsThunks";
import { RootState } from "../../app/store";
import { searchField } from "../../store/showsSlice";

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const fieldValue = useAppSelector((state: RootState) => state.shows.field);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = event.target.value;
    dispatch(fetchTVShows(fieldValue));
    dispatch(searchField(fieldValue));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSearch = () => {};
  return (
    <>
      <form onSubmit={onSubmit} className="d-flex align-items-center">
        <div className="mb-3">
          <label htmlFor="TVshow" className="form-label h3">
            Search TV Show
          </label>
          <input
            type="text"
            className="form-control"
            name="TVshow"
            id="TVshow"
            value={fieldValue}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success mt-4 ms-3" onClick={handleSearch}>
          search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
