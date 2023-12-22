import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTVShows, fetchTVShowsInfo } from "./showsThunks";
import { RootState } from "../app/store";
import { InfoShowProps, ShowsProps } from "../types";

interface ShowsState {
  fetchLoading: boolean;
  deleteLoading: boolean;
  items: ShowsProps[] | null;
  field: string;
  showInfo: InfoShowProps | null;
}

const initialState: ShowsState = {
  fetchLoading: false,
  deleteLoading: false,
  items: null,
  field: "",
  showInfo: null,
};

export const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    searchField: (state, action: PayloadAction<string>) => {
      state.field = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTVShows.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchTVShows.fulfilled, (state, action) => {
      state.fetchLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchTVShows.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(fetchTVShowsInfo.fulfilled, (state, action) => {
      state.showInfo = action.payload;
    });
  },
});

export const showsReducer = showsSlice.reducer;
export const selectShows = (state: RootState) => state.shows.items;
export const selectShowsInfo = (state: RootState) => state.shows.showInfo;
export const { searchField } = showsSlice.actions;
