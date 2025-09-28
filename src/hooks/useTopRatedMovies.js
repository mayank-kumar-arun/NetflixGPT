import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import {  addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );

    const jsonData = await data.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopRatedMovies;
