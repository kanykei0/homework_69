import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShowsProps } from "../types";
import { fetchTVShows } from "./showsThunks";

interface ShowsState {
  fetchLoading: boolean;
  deleteLoading: boolean;
  shows: ShowsProps[] | null;
  field: string;
}

const initialState: ShowsState = {
  fetchLoading: false,
  deleteLoading: false,
  shows: null,
  field: "",
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
      state.shows = action.payload;
    });
    builder.addCase(fetchTVShows.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const showsReducer = showsSlice.reducer;
export const { searchField } = showsSlice.actions;
