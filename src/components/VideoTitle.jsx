import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video text-white bg-gradient-to-r from-black md:pt-[15%] px-6 md:px-12">
      <h1 className="text-md md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="mt-2 md:m-0">
        <button className="bg-white text-black text-md md:text-xl py-1 px-2 md:py-4 md:px-12  rounded-lg cursor-pointer hover:opacity-70">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white text-xl p-4 px-12 opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
