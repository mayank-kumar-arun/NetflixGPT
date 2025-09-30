import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );

    const jsonData = await data.json();
    dispatch(addPopularMovies(jsonData.results));
  };
  useEffect(() => {
    !popularMovies && getMovies();
  }, []);
};

export default usePopularMovies;
