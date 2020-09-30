// import getSearchHistory from "../utils/getSearchHistory";
import { FETCH_SEARCH_HISTORY, CLEAR_SEARCH_HISTORY } from "./types";

export const fetchSearchHistory = () => {
  const searchHistory = getSearchHistory();
  return {
    type: FETCH_SEARCH_HISTORY,
    payload: searchHistory,
  };
};

export const clearSearchHistory = () => {
  clearHistory();
  return {
    type: CLEAR_SEARCH_HISTORY,
  };
};

const getSearchHistory = () => {
  const searchStorage = window.localStorage.getItem("searchHistory");
  const searchHistory = searchStorage ? JSON.parse(searchStorage) : [];
  return searchHistory;
};

const clearHistory = () => {
  return window.localStorage.removeItem("searchHistory");
};
