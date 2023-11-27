import React, { useEffect, useState } from "react";
import { closeMenu } from "../../Utils/Features/appSlice";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import WatchPageShimmerUi from "./WatchPageShimmerUi";

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
    }, 300);

    return () => {
      clearTimeout(ti);
    };
  }, []);
  return !check ? (
    <WatchPageShimmerUi />
  ) : (
    <div className="flex flex-col">
      <div className="px-5">
        <iframe
          width={1100}
          height={550}
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="The Last El Clasico Between Cristiano Ronaldo & Lionel Messi"
          //   frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
