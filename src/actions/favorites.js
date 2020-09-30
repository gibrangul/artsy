import {
  ADD_TO_FAVORITES,
  FETCH_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "./types";
import moment from "moment";

export const fetchFavorites = () => {
  const favorites = getFavorites();
  return {
    type: FETCH_FAVORITES,
    payload: favorites,
  };
};

export const addToFavorites = (artist) => {
  const favorites = getFavorites().filter(({ id }) => id !== artist.id);
  const artistDate = { ...artist, addDate: moment().unix() };
  favorites.push(artistDate);
  setFavorites(favorites);
  return {
    type: ADD_TO_FAVORITES,
    payload: artistDate,
  };
};

export const removeFromFavorites = (artistID) => {
  const favorites = getFavorites().filter(({ id }) => id !== artistID);
  setFavorites(favorites);
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: artistID,
  };
};

const getFavorites = () => {
  const favoritesStorage = window.localStorage.getItem("favorites");
  const favorites = favoritesStorage ? JSON.parse(favoritesStorage) : [];
  return favorites;
};

const setFavorites = (favorites) => {
  return window.localStorage.setItem("favorites", JSON.stringify(favorites));
};
