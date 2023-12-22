import React from "react";

export interface Show {
  id: number;
  name: string;
}

export interface ShowsProps {
  id: number;
  show: Show;
}

export interface InfoShowProps {
  url: string;
  name: string;
  genres: string[];
  averageRuntime: number;
  premiered: string;
  rating: {
    average: number;
  };
  image: {
    original: string;
  } | null;
  summary: string;
  status: string;
  type: string;
  language: string;
}
