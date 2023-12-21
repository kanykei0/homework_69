import { createAsyncThunk } from "@reduxjs/toolkit";
import { ShowsProps } from "../types";
import { axiosApi } from "../axiosApi";

export const fetchTVShows = createAsyncThunk<ShowsProps[], string | undefined>(
  "shows/fetchAll",
  async (name) => {
    try {
      const response = await axiosApi.get(`search/shows?q=${name}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error!", error);
      throw error;
    }
  }
);
