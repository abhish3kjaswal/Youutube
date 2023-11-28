import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoContainerShimmerUI from "./VideoContainerShimmerUI";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const res = await data.json();

    setVideos(res?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos && videos.length
        ? videos.map((ele, i) => (
            <Link key={ele?.key || i} to={"/watch?v=" + ele.id}>
              {i == 0 ? (
                <AdHOCVideoCard info={ele} />
              ) : (
                <VideoCard info={ele} />
              )}
            </Link>
          ))
        : <VideoContainerShimmerUI />}
    </div>
  );
};

const AdHOCVideoCard = (props) => {
  return (
    <div className="p-1 m-1">
      <label className="text-sm font-semibold cursor-pointer">Ad</label>
      <VideoCard {...props} />
    </div>
  );
};

export default VideoContainer;
