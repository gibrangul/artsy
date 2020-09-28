import bandsInTown from "../apis/bandsInTown";
import getSearchHistory from "../utils/getSearchHistory";
import { FETCH_ARTISTS, FETCH_ARTIST_ERROR } from "./types";

export const fetchArtist = (name) => async (dispatch) => {
  try {
    const response = await bandsInTown.get(`/artists/${name}`);
    if (!response.data.name) {
      throw new Error("Artist not found!");
    }
    const searchHistory = getSearchHistory().filter(
      ({ id }) => id !== response.data.id
    );
    searchHistory.push(response.data);
    window.localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    dispatch({
      type: FETCH_ARTISTS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ARTIST_ERROR,
      payload: error.message,
    });
  }
};
