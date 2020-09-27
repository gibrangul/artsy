import { combineReducers } from "redux";
import artistsReducer from "./artistsReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
  artist: artistsReducer,
  events: eventsReducer,
});
