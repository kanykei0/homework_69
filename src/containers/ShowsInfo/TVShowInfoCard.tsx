import React from "react";
import { InfoShowProps } from "../../types";

interface Props {
  showInfo: InfoShowProps;
}

const TVShowInfoCard: React.FC<Props> = ({ showInfo }) => {
  return (
    <div className="ps-4">
      <h1 className="mb-4">{showInfo.name}</h1>
      <div className="d-flex">
        <div>
          <img
            className="tv-image rounded"
            src={
              showInfo.image
                ? showInfo.image.original
                : "https://americandurafilm.com/wp-content/uploads/2022/06/No-Image-Placeholder.png"
            }
            alt={showInfo.name}
          />
        </div>
        <div>
          <table className="table ms-3">
            <tbody>
              <tr>
                <th>Rating:</th>
                <td>
                  {showInfo.rating.average ? showInfo.rating.average : "Empty"}
                </td>
              </tr>
              <tr>
                <th>Premiered:</th>
                <td>{showInfo.premiered ? showInfo.premiered : "Empty"}</td>
              </tr>
              <tr>
                <th>Type:</th>
                <td>{showInfo.type}</td>
              </tr>
              <tr>
                <th>Genre:</th>
                <td>
                  {showInfo.genres.length > 0
                    ? showInfo.genres.map((genre, index) => (
                        <span key={index} className="me-2 p-0">
                          {genre}
                          {index < showInfo.genres.length - 1 && <span>,</span>}
                        </span>
                      ))
                    : "Empty"}
                </td>
              </tr>
              <tr>
                <th className="pe-5">Language: </th>
                <td>{showInfo.language}</td>
              </tr>
              <tr>
                <th className="pe-5">Average runtime: </th>
                <td>
                  {showInfo.averageRuntime
                    ? showInfo.averageRuntime + " min"
                    : "Empty"}
                </td>
              </tr>
              <tr>
                <th>Status: </th>
                <td>{showInfo.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h5 className="mt-5">Description:</h5>
      <p
        className="tv-description"
        dangerouslySetInnerHTML={{ __html: showInfo.summary }}
      ></p>
    </div>
  );
};

export default TVShowInfoCard;
