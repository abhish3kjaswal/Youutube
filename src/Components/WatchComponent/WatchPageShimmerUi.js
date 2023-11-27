import React from "react";

const WatchPageShimmerUi = () => {
  return (
    <div className="m-5 px-5 h-[100%] w-[100%] flex flex-col">
      <div className="h-[450px] w-[75%] bg-gray-100"></div>
      <div className="h-[100px] flex flex-row w-[65%]">
          <div className="h-[45%] w-[5%] mt-5 rounded-full bg-gray-100"></div>
          <div className="w-[95%] h-[55%] mt-2">
            <div className="h-[24%] mx-2 my-3 rounded-lg bg-gray-100"></div>
            <div className="h-[24%] mx-2 my-3 rounded-lg bg-gray-100"></div>
            <div className="h-[24%] mx-2 my-3 rounded-lg bg-gray-100"></div>
          </div>
        </div>
    </div>
  );
};

export default WatchPageShimmerUi;
