import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { InfoShowProps, ShowsProps } from "../types";

export const fetchTVShows = createAsyncThunk<ShowsProps[], string | undefined>(
  "shows/fetchAll",
  async (name) => {
    try {
      const response = await axiosApi.get(`search/shows?q=${name}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchTVShowsInfo = createAsyncThunk<
  InfoShowProps,
  string | undefined
>("shows/fetchInfo", async (id) => {
  try {
    const response = await axiosApi.get(`/shows/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
