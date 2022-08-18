import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";

const Row = ({ title, fetchUrl, id, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request);
    setMovies(request.data.results);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider_arrow-left">
          <sapn className="arrow">{"<"}</sapn>
        </div>
        <div id={id} className="row_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
          <div className="slider_arrow-right">
            <span className="arrow">{">"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Row;
