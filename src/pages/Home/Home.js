import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import {
  addToFavorites,
  fetchArtist,
  fetchFavorites,
  fetchSearchHistory,
  removeFromFavorites,
} from "../../actions";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import ArtistGrid from "../../components/ArtistGrid/ArtistGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./home.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  const artist = useSelector(({ artist }) => artist);
  const searchHistory = useSelector(({ searchHistory }) => searchHistory);
  const favorites = useSelector(({ favorites }) => favorites);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchSearchHistory());
      dispatch(fetchFavorites());
      setLoading(false);
    }, 200);
  }, [dispatch]);

  useEffect(() => {
    if (artist) setTimeout(() => setSearching(false), 200);
  }, [artist]);

  const onSearch = (value) => {
    setSearching(true);
    dispatch(fetchArtist(value));
  };

  const renderSearchCard = () => {
    if (artist && !searching) {
      return (
        <ArtistCard
          artist={artist}
          favorite={{
            liked: favorites[artist.id] ? true : false,
            onClick: () => {
              if (!favorites[artist.id]) {
                dispatch(addToFavorites(artist));
              } else {
                dispatch(removeFromFavorites(artist.id));
              }
            },
          }}
        />
      );
    } else if (searching) {
      return (
        <div className="artist-card flex-row flex-center">
          <ScaleLoader
            height={35}
            width={4}
            radius={2}
            margin={2}
            color={"#5d67ff"}
            loading={searching}
          />
        </div>
      );
    }
  };

  const sortByLikeDate = (artists) =>
    artists.sort((a, b) => (a.addDate < b.addDate ? 1 : -1));

  const sortBySearchDate = (artists) =>
    artists.sort((a, b) => (a.searchDate < b.searchDate ? 1 : -1));

  return (
    <div className={`home-page content ${loading ? "hide" : "show"}`}>
      <div className="search">
        <div className="search-form">
          <h1>
            Find <span>Events</span> by your
            <br />
            Favorite <span>Artists</span>.
          </h1>
          <h2>Search below to get started.</h2>
          <SearchBar onSearch={onSearch} placeholder={"Search for an Artist"} />
        </div>
        {renderSearchCard()}
      </div>
      <div className="suggestions no-scroll-bars">
        {searchHistory.length === 0 ? (
          <div className="artist-grid" style={{ padding: "24px" }}>
            <div className="artist-grid_header" style={{ marginBottom: 0 }}>
              <h3>Your Recent Searches will appear here</h3>
            </div>
          </div>
        ) : (
          <ArtistGrid
            title="Recent Searches"
            headerAction={() => history.push("/searchHistory")}
            data={sortBySearchDate(Object.values(searchHistory)).slice(0, 5)}
            artistClick={(artist) => history.push(`/${artist.name}/events`)}
          />
        )}
        {searchHistory.length === 0 ? (
          <div className="artist-grid" style={{ padding: "24px" }}>
            <div className="artist-grid_header" style={{ marginBottom: 0 }}>
              <h3>Your Recent Searches will appear here</h3>
            </div>
          </div>
        ) : (
          <ArtistGrid
            title="Favorites"
            headerAction={() => history.push("/favorites")}
            data={sortByLikeDate(Object.values(favorites)).slice(0, 5)}
            artistClick={(artist) => history.push(`/${artist.name}/events`)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
