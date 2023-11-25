import React, { useEffect } from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../../Utils/Features/appSlice";

const MainContainer = () => {
  const appstate = useSelector((state) => state?.app);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  return (
    <div className={appstate.isMenuOpen ? "w-5/6 " : ""}>
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
