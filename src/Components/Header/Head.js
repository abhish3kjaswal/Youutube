import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../Utils/Features/appSlice";
import { Link, json, useNavigate } from "react-router-dom";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_RESULTS_API,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
  YOUTUBE_VIDEOS_API,
} from "../../Utils/constants";
import { cacheResults } from "../../Utils/Features/searchSlice";
import { addSearchResults } from "../../Utils/Features/searchResultSlice";

// let ti;
const Head = (props) => {
  const dispatch = useDispatch();

  const [searchTxt, setSearchTxt] = useState("");

  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const [showSuggestion, setShowSuggestions] = useState(false);

  const cacheResult = useSelector((state) => state.search);

  const navigate = useNavigate();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // clearTimeout(ti);
    const timeOut = setTimeout(() => {
      if (cacheResult[searchTxt]) {
        setSearchSuggestions(cacheResult[searchTxt]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    if (searchTxt == "") {
      setShowSuggestions(false);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchTxt]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchTxt);

    const jsonData = await data.json();

    setSearchSuggestions(jsonData[1] || []);

    dispatch(
      cacheResults({
        [searchTxt]: jsonData[1],
      })
    );

    jsonData &&
      jsonData.length > 0 &&
      jsonData[1] &&
      jsonData[1].length &&
      setShowSuggestions(true);
  };

  const handleSuggestionClick = (e) => {
    e && e.preventDefault();
    searchTxt && navigate("/results?search_query=" + searchTxt);
    setShowSuggestions(false);

  };

  const handleSuggestionListClick = (e, sugName) => {
    e && e.preventDefault();
    e && e.stopPropagation();

    setSearchTxt(sugName)
    
    
    sugName && navigate("/results?search_query=" + sugName);
    setShowSuggestions(false);
  };


  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 ml-1 cursor-pointer"
          alt="menu-logo"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
        />
        <Link to="/">
          <img
            className="h-11 mx-2"
            alt="youtube-logo"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          />
        </Link>
      </div>
      <div className="col-span-10 ">
        <form onSubmit={handleSuggestionClick}>
          <div className="flex">
            <input
              className="w-1/2 border border-gray-400 p-2 pl-5 rounded-l-full ml-40"
              type="text"
              placeholder="Search"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e?.target?.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button
              type="submit"
              className="border border-gray-400 p-2 w-16 rounded-r-full flex justify-center items-center bg-gray-200"
            >
              <img
                alt="search-icon"
                className="h-5 w-5 cursor-pointer"
                src="https://static-00.iconduck.com/assets.00/magnifying-glass-icon-2048x2048-hm9qywq7.png"
              />
            </button>
          </div>
        </form>
        {(showSuggestion && searchSuggestions?.length && (
          <div className="absolute bg-white w-[34rem] border border-gray-100 ml-44 p-3 pl-5 rounded-lg shadow-lg ">
            <ul>
              {(searchSuggestions?.length &&
                searchSuggestions.map((ele, i) => (
                  <div key={i}>
                    <li
                      className="flex items-center mb-2 py-1 shadow-sm hover:bg-gray-100"
                      key={i}
                      onMouseDown={(e) => handleSuggestionListClick(e, ele)}
                    >
                      <img
                        alt="search-icon"
                        className="h-4 w-4 cursor-pointer mr-1"
                        src="https://static-00.iconduck.com/assets.00/magnifying-glass-icon-2048x2048-hm9qywq7.png"
                      />
                      {ele || ""}
                    </li>
                    {/* <div className="w-[30rem] h-[1px] bg-gray-200"></div> */}
                  </div>
                ))) ||
                ""}
            </ul>
          </div>
        )) ||
          ""}
      </div>
      <div className="">
        <img
          className="h-8 cursor-pointer "
          alt="user-icon"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
