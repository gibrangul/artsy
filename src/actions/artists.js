import bandsInTown from "../apis/bandsInTown";
import { FETCH_ARTIST, FETCH_ARTIST_ERROR } from "./types";

export const fetchArtist = (name) => async (dispatch, getState) => {
  const { searchHistory } = getState();
  try {
    const response = await bandsInTown.get(`/artists/${name}`);
    if (!response.data.name) {
      throw new Error("Artist not found!");
    }

    const searchHistoryFiltered = searchHistory.filter(
      ({ id }) => id !== response.data.id
    );
    searchHistoryFiltered.push(response.data);
    window.localStorage.setItem(
      "searchHistory",
      JSON.stringify(searchHistoryFiltered)
    );

    dispatch({
      type: FETCH_ARTIST,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ARTIST_ERROR,
      payload: error.message,
    });
  }
};
