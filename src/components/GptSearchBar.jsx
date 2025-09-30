import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/langConstants";
import model from "../utils/openAi";
import { options } from "../utils/constants";
import { addgptMovies } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.config.language);
  const SearchText = useRef(null);
  const [loading, setLoading] = useState(false);

  const getTMDBMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&page=1",
      options
    );
    const jsonData = await data.json();
    return jsonData.results;
  };

  const HandleSearchSubmit = async () => {
    setLoading(true);
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      SearchText.current.value +
      ". Only give me names of five movies, comma seperated like the example result given ahead. Example Reslut: Gadar, Sholay, Raaz, Golmaal, Jawaan";
    const result = await model.generateContent(query);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
    // const quiz = JSON.parse(cleanedText);
    const movieArray = cleanedText.split(",");
    const ResultPromises = movieArray.map((movie) => getTMDBMovies(movie));
    const resultMovies = await Promise.all(ResultPromises);
    dispatch(
      addgptMovies({ movieResults: resultMovies, movieSearch: movieArray })
    );
    setLoading(false);
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-white border-none"
          placeholder={lang[language].gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={HandleSearchSubmit}
        >
          {loading ? "Loading..." : lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
