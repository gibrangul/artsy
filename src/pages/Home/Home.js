import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { fetchArtist, fetchSearchHistory } from "../../actions";
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

  const renderSearchCard = () => {
    if (artist && !searching) {
      if (artist.error) {
        return (
          <div
            className="artist-card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {artist.error} Please Try again.
          </div>
        );
      } else {
        return <ArtistCard artist={artist} />;
      }
    } else if (searching) {
      return (
        <div
          className="artist-card"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchSearchHistory());
      setLoading(false);
    }, 200);
  }, []);

  useEffect(() => {
    if (artist) {
      setTimeout(() => {
        setSearching(false);
      }, [500]);
    }
  }, [artist]);

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
          <SearchBar
            onSearch={(value) => {
              setSearching(true);
              dispatch(fetchArtist(value));
            }}
            placeholder={"Search for an Artist"}
          />
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
            headerAction={() => console.log("clicked")}
            data={searchHistory.slice(0, 5)}
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
            headerAction={() => console.log("clicked")}
            data={searchHistory.slice(0, 5)}
            artistClick={(artist) => history.push(`/${artist.name}/events`)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
