import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet || {};

  const appstate = useSelector((state) => state?.app);

  return (
    <div
      className={
        "p-2 m-2 shadow-sm " + (appstate?.isMenuOpen == true ? " w-[265px] mx-4 h-80 flex flex-col justify-center items-center" : " w-80")
      }
      //   className={"p-2 m-2 shadow-sm w-80"}
    >
      <div>
        <img
          className="rounded-lg"
          alt="videoCardImg"
          src={thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-semibold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
