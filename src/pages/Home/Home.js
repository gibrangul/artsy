import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
import SiteLoader from "../../components/SiteLoader";
import { sortDSC } from "../../utils/general";
import "./home.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const size = useWindowSize();
  // const suggestionsRef = useRef(null);
  // if (suggestionsRef.current) {
  //   if (size.width > 972) {
  //     document.querySelector(".suggestions").style.height = `${
  //       size.height - 84
  //     }px`;
  //   } else {
  //     document.querySelector(".suggestions").style.height = `unset`;
  //   }
  // }
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

  const onSearch = (name) => {
    setSearching(true);
    dispatch(fetchArtist(name));
  };

  const onFavoriteClick = () =>
    !favorites[artist.id]
      ? dispatch(addToFavorites(artist))
      : dispatch(removeFromFavorites(artist.id));

  const renderSearchCard = () => {
    if (artist && !searching) {
      return (
        <ArtistCard
          artist={artist}
          favorite={{
            liked: favorites[artist.id] ? true : false,
            onClick: onFavoriteClick,
          }}
        />
      );
    } else if (searching) {
      return (
        <div className="artist-card flex-row flex-center bg-100 border-100">
          <SiteLoader loading={searching} />
        </div>
      );
    }
  };

  const artistClick = ({ name }) => history.push(`/${name}/events`);

  return (
    <div className={`home-page content ${loading ? "hide" : "show"}`}>
      <div className="page-container">
        <div className="search">
          <div className="search_form flex-column">
            <h1 className="mb-24">
              Find <span className="primary-text">Events</span> by your
              <br />
              Favorite <span className="primary-text">Artists</span>.
            </h1>
            <h2 className="semi-bold mb-16 text-secondary">
              Search below to get started.
            </h2>
            <SearchBar
              onSearch={onSearch}
              placeholder={"Search for an Artist"}
            />
          </div>
          {renderSearchCard()}
        </div>
        <div className="suggestions no-scroll-bars flex-1">
          <ArtistGrid
            title="Recent Searches"
            actionTitle="See More"
            headerAction={() => history.push("/searchHistory")}
            data={sortDSC(Object.values(searchHistory), "searchDate").slice(
              0,
              5
            )}
            artistClick={artistClick}
          />
          <ArtistGrid
            title="Favorites"
            actionTitle="See More"
            headerAction={() => history.push("/favorites")}
            data={sortDSC(Object.values(favorites), "addDate").slice(0, 5)}
            artistClick={artistClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
