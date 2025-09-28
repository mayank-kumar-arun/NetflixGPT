import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    );
    const jsonData = await data.json();
    const filteredData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      filteredData.length > 0 ? filteredData[0] : jsonData.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useTrailerVideo;
