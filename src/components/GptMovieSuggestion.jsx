import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieSearch } = useSelector((state) => state.gptSearch);
  if (!movieResults) return;
  return (
    <div className="p-4 m-4 bg-black opacity-90">
      <div>
        {movieSearch.map((movie, index) => {
          return (
            <MovieList
              key={movie}
              title={movie}
              movies={movieResults[index]}
            ></MovieList>
          );
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
