import { combineReducers } from "redux";
import artistsReducer from "./artistReducer";
import favoritesReducer from "./favoritesReducer";
import searchHistoryReducer from "./searchHistoryReducer";

export default combineReducers({
  artist: artistsReducer,
  searchHistory: searchHistoryReducer,
  favorites: favoritesReducer,
});
