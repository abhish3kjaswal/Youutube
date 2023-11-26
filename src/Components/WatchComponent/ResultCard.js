import React from "react";

const ResultCard = ({ info }) => {
  const { snippet } = info;

  const { channelTitle, title, thumbnails, description } = snippet || {};

  return (
    <div className={"cursor-pointer my-5 h-72"}>
      <div className="flex flex-row h-[100%] w-[100%] flex-wrap">
        <img
          className="rounded-lg w-[35%]"
          alt="videoCardImg"
          src={thumbnails?.medium?.url}
        />
        <div className="w-[50%] ml-8">
          <ul>
            <li className="font-semibold py-2 text-xl">{title || ""}</li>
            <li className="text-sm">{channelTitle || ""}</li>
            <li className="text-sm mt-3">{description || ""}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
