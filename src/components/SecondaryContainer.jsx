import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      <div className="bg-black pl-4">
        <div className="-mt-52 relative z-20">
          {movies.nowPlayingMovies && (
            <MovieList
              title="Now Playing"
              movies={movies.nowPlayingMovies}
            ></MovieList>
          )}
          {movies.popularMovies && (
            <MovieList
              title="Popular Movies"
              movies={movies.popularMovies}
            ></MovieList>
          )}
          {movies.topratedMovies && (
            <MovieList
              title="Top Rated Movies"
              movies={movies.topratedMovies}
            ></MovieList>
          )}
          {movies.upcomingMovies && (
            <MovieList
              title="Upcoming Movies"
              movies={movies.upcomingMovies}
            ></MovieList>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
