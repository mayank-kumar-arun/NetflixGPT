import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );

    const jsonData = await data.json();
    dispatch(addUpcomingMovies(jsonData.results));
  };
  useEffect(() => {
    !upcomingMovies && getMovies();
  }, []);
};

export default useUpcomingMovies;
