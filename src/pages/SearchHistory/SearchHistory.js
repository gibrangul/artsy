import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchHistory, clearSearchHistory } from "../../actions";
import ArtistGrid from "../../components/ArtistGrid/ArtistGrid";
import { sortDSC } from "../../utils/general";
import "./searchhistory.scss";

const SearchHistory = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchHistory = useSelector(({ searchHistory }) => searchHistory);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchSearchHistory());
      setLoading(false);
    }, 400);
  }, [dispatch]);

  return (
    <div
      className={`recent-searches-page content ${loading ? "hide" : "show"}`}
    >
      <div className="page-container">
        <ArtistGrid
          title="Search History"
          actionTitle="Clear History"
          headerAction={() => dispatch(clearSearchHistory())}
          data={sortDSC(Object.values(searchHistory), "searchDate")}
          artistClick={({ name }) => history.push(`/${name}/events`)}
        />
      </div>
    </div>
  );
};

export default SearchHistory;
