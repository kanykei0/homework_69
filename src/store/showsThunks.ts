import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../axiosApi";
import { ShowsProps } from "../types";

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
