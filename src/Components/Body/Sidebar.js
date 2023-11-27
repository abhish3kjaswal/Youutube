import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Sidebar = () => {
  const appstate = useSelector((state) => state?.app);

  const location = useLocation();
  const navigate = useNavigate();

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
        <li className="my-6">
          <HomeIcon fontSize="large" />
        </li>
        <li className="my-6">
          <AppShortcutIcon fontSize="large" />
        </li>
        <li className="my-6">
          <SubscriptionsIcon fontSize="large" />
        </li>
        <li className="my-6">
          <LibraryMusicIcon fontSize="large" />
        </li>
      </ul>
    </div>
  ) : (
    <div className="p-5 shadow-lg w-1/6">
      <>
        <ul>
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer my-3 flex items-center"
          >
            <HomeIcon fontSize="medium" />
            <label className="ml-2">Home</label>
          </li>

          <li
            onClick={() => navigate("/")}
            className="cursor-pointer my-3 flex items-center"
          >
            <AppShortcutIcon fontSize="medium" />
            <label className="ml-2">Shorts</label>
          </li>

          <li
            onClick={() => navigate("/")}
            className="cursor-pointer my-3 flex items-center"
          >
            <SubscriptionsIcon fontSize="medium" />
            <label className="ml-2">Subscriptions</label>
          </li>

          <li
            onClick={() => navigate("/")}
            className="cursor-pointer my-3 flex items-center"
          >
            <LibraryMusicIcon fontSize="medium" />
            <label className="ml-2">Youtube Music</label>
          </li>
        </ul>
        <hr />
        <h1 className="font-bold pt-4">Subscriptions</h1>
        <ul className="mb-2">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <hr />
        <h1 className="font-bold pt-4">Watch Later</h1>
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
