import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    };
    fetchData();
  }, [movieId]);

  if (!movie) return <div>영화의 상세 데이터가 존재하지 않습니다. </div>;

  return (
    <section>
      <img
        className="modal_poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="영화_디테일_이미지"
      />
    </section>
  );
};

export default DetailPage;
