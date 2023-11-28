import React, { useEffect, useState } from "react";
import { closeMenu } from "../../Utils/Features/appSlice";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import WatchPageShimmerUi from "./WatchPageShimmerUi";
import LiveChat from "./ChatComponent/LiveChat";

const WatchPage = () => {
  const [params] = useSearchParams();
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    const ti = setTimeout(() => {
      setCheck(true);
    }, 1000);

    return () => {
      clearTimeout(ti);
    };
  }, []);
  return !check ? (
    <WatchPageShimmerUi />
  ) : (
    <div className="flex flex-col w-full">
      <div className="flex flex-row px-5 w-full">
        <div className="w-[70%]">
          <iframe
            width={"100%"}
            height={550}
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="The Last El Clasico Between Cristiano Ronaldo & Lionel Messi"
            //   frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>
        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
