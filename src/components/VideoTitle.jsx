import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video text-white bg-gradient-to-r from-black  pt-[15%] px-12">
      <h1 className="text-3xl  font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black text-xl p-4 px-12  rounded-lg cursor-pointer hover:opacity-70">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white text-xl p-4 px-12 opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
