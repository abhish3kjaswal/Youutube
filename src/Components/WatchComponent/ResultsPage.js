import React, { useEffect } from "react";
import ButtonsList from "../Body/MainContainer/ButtonsList";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../../Utils/Features/appSlice";
import ResultCard from "./ResultCard";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY, YOUTUBE_RESULTS_API } from "../../Utils/constants";
import { addSearchResults } from "../../Utils/Features/searchResultSlice";

const ResultsPage = () => {
  const appstate = useSelector((state) => state?.app);

  const [params] = useSearchParams();

  const searchResults = useSelector(
    (state) => state?.searchResults?.searchResultAr
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  useEffect(() => {
    params.get("search_query") && getSearchResults(params.get("search_query"));
  }, [params.get("search_query")]);

  const getSearchResults = async (searchText) => {
    const data = await fetch(
      YOUTUBE_RESULTS_API + searchText + "&key=" + YOUTUBE_API_KEY
    );

    const jsonData = await data.json();

    dispatch(addSearchResults(jsonData?.items));
  };

  return (
    <div className={appstate.isMenuOpen ? "w-5/6 ml-5" : "ml-5"}>
      <ButtonsList />
      {searchResults && searchResults.length
        ? searchResults.map((ele, i) => (
            <Link key={ele?.etag || i} to={"/watch?v=" + ele?.id?.videoId}>
              <ResultCard info={ele} />
            </Link>
          ))
        : "No Results Found"}
    </div>
  );
};

export default ResultsPage;
