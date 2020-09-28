import bandsInTown from "../apis/bandsInTown";
import getSearchHistory from "../utils/getSearchHistory";
import { FETCH_ARTISTS } from "./types";

export const fetchArtists = (name) => async (dispatch) => {
  const response = await bandsInTown.get(`/artists/${name}`);
  console.log(response.data);
  const searchHistory = getSearchHistory().filter(
    ({ id }) => id !== response.data.id
  );
  searchHistory.push(response.data);
  window.localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  dispatch({
    type: FETCH_ARTISTS,
    payload: response.data,
  });
};
