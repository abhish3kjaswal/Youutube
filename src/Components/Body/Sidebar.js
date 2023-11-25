import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const appstate = useSelector((state) => state?.app);

  const location = useLocation();

  //Early Return Pattern
  // if (
  //   appstate?.isMenuOpen == false &&
  //   location.pathname.includes("watch") == false
  // ) {
  //   return (

  //   );
  // }
  return appstate?.isMenuOpen == false &&
    location.pathname.includes("watch") == true ? (
    ""
  ) : appstate?.isMenuOpen == false ? (
    <div className="p-5 shadow-lg w-16 flex justify-center">
      <ul>
        <li>Icon1</li>
        <li>Icon2</li>
        <li>Icon3</li>
        <li>Icon4</li>
      </ul>
    </div>
  ) : (
    <div className="p-5 shadow-lg w-1/6">
      <>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Youtube Music</li>
        </ul>
        <h1 className="font-bold pt-6">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>

        <h1 className="font-bold pt-6">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </>
    </div>
  );
};

export default Sidebar;
