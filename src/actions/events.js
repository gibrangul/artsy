import bandsInTown from "../apis/bandsInTown";
import { FETCH_EVENTS } from "./types";

export const fetchEvents = (name) => async (dispatch) => {
  const response = await bandsInTown.get(`/artists/${name}/events`);
  dispatch({
    type: FETCH_EVENTS,
    payload: response.data,
  });
};
