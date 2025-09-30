import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );

    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };
  useEffect(() => {
    !nowPlayingMovies && getMovies();
  }, []);
};

export default useNowPlayingMovies;
