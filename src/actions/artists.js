import { FETCH_ARTISTS } from "./types";

export const fetchArtists = () => async (dispatch) => {
  const response = { data: [] };
  dispatch({
    type: FETCH_ARTISTS,
    payload: response.data,
  });
};
