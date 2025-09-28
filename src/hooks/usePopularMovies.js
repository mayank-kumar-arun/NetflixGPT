import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );

    const jsonData = await data.json();
    dispatch(addPopularMovies(jsonData.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default usePopularMovies;
