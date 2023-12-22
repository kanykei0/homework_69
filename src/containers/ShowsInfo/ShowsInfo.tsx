import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectShowsInfo } from "../../store/showsSlice";
import { useEffect } from "react";
import { fetchTVShowsInfo } from "../../store/showsThunks";
import { InfoShowProps } from "../../types";
import TVShowInfoCard from "./TVShowInfoCard";

const ShowInfo = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const showData = useAppSelector<InfoShowProps | null>(selectShowsInfo);

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchTVShowsInfo(id));
    };
    void getData();
  }, [id, dispatch]);

  return (
    <div className="float-end card shadow p-3 me-5 info-card">
      {showData ? <TVShowInfoCard showInfo={showData} /> : <h2>Nothing</h2>}
    </div>
  );
};

export default ShowInfo;
