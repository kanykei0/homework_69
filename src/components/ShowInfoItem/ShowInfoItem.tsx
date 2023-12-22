import React from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
}

const ShowInfoItem: React.FC<Props> = ({ id, name }) => {
  return (
    <Link className="nav-link ms-4" to={`/tv-shows/${id}`}>
      <p>{name}</p>
    </Link>
  );
};

export default ShowInfoItem;
