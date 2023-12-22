import React from "react";
import { Link } from "react-router-dom";
import { Show } from "../../types";

const ShowInfoItem: React.FC<Show> = ({ id, name }) => {
  return (
    <Link className="nav-link ms-4" to={`/tv-shows/${id}`}>
      <p>{name}</p>
    </Link>
  );
};

export default ShowInfoItem;
