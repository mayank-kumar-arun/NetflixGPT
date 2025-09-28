import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/langConstants";

const GptSearchBar = () => {
  const language = useSelector((state) => state.config.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 ">
        <input
          type="text"
          className="p-4 m-4 col-span-9 bg-white border-none"
          placeholder={lang[language].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg cursor-pointer">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
