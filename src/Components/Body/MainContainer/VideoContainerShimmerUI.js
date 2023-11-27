import React from "react";

const VideoContainerShimmerUI = () => {
  return Array(10)
    .fill(0)
    .map((ele, i) => (
      <div key={i} className="w-[380px] h-96 px-4 py-2">
        <div className="h-[50%] rounded-md bg-gray-100"></div>
        <div className="h-[50%] flex flex-row">
          <div className="h-[30%] w-[20%] mt-5 rounded-full bg-gray-100"></div>
          <div className="w-[100%] h-[50%] mt-2">
            <div className="h-[20%] mx-2 my-3 rounded-lg bg-gray-100"></div>
            <div className="h-[20%] mx-2 my-3 rounded-lg bg-gray-100"></div>
          </div>
        </div>
      </div>
    ));
};

export default VideoContainerShimmerUI;
