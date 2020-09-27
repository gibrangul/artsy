import bandsInTown from "../apis/bandsInTown";
import { FETCH_ARTISTS } from "./types";

export const fetchArtists = (name) => async (dispatch) => {
  const response = await bandsInTown.get(`/artists/${name}`);
  console.log(response.data);
  dispatch({
    type: FETCH_ARTISTS,
    payload: response.data,
  });
};
