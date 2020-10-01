import moment from "moment";
import bandsInTown from "../apis/bandsInTown";
import {
  ADD_TO_SEARCH_HISTORY,
  FETCH_ARTIST,
  FETCH_ARTIST_ERROR,
} from "./types";

export const fetchArtist = (name) => async (dispatch, getState) => {
  const { searchHistory } = getState();
  try {
    const response = await bandsInTown.get(`/artists/${name}`);

    if (response.data === "") {
      throw new Error("Artist not found!");
    }
    const artist = {
      ...response.data,
      searchDate: moment().unix(),
    };

    const searchHistoryFiltered = Object.values({
      ...searchHistory,
      [artist.id]: artist,
    });

    setSearchHistory(searchHistoryFiltered);

    dispatch({
      type: FETCH_ARTIST,
      payload: artist,
    });
    dispatch({
      type: ADD_TO_SEARCH_HISTORY,
      payload: artist,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ARTIST_ERROR,
      payload: error.message,
    });
  }
};

const setSearchHistory = (searchHistory) => {
  return window.localStorage.setItem(
    "searchHistory",
    JSON.stringify(searchHistory)
  );
};
