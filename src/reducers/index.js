import { combineReducers } from "redux";
import artistsReducer from "./artistsReducer";
import searchHistoryReducer from "./searchHistoryReducer";

export default combineReducers({
  artist: artistsReducer,
  searchHistory: searchHistoryReducer,
});
