import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchArtists } from "../../actions";
import ArtistGrid from "../../components/ArtistGrid/ArtistGrid";
import SearchBar from "../../components/SearchBar/SearchBar";
import getSearchHistory from "../../utils/getSearchHistory";
import "./home.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchHistory, setSearchHistory] = useState(
    getSearchHistory().reverse()
  );
  const artist = useSelector(({ artist }) => artist);

  useEffect(() => {
    console.log(searchHistory);
  }, [searchHistory]);

  return (
    <div className="home-page">
      <div className="search">
        <div className="search-form">
          <h1>
            Find Events by your
            <br />
            Favorite <span>Artists</span>.
          </h1>
          <h2>Search below to get started.</h2>
          <SearchBar
            onSearch={(value) => dispatch(fetchArtists(value))}
            placeholder={"Search for an Artist"}
          />
        </div>
        {artist.name && (
          <div className="search-result">
            <div className="search-result-card">
              <img alt={artist.name} src={artist.image_url} />
              <div className="overlay" />
              <div className="search-result-card-info">
                <div className="search-result-card-info-text">
                  <h2>{artist.name}</h2>
                  <a href={artist.facebook_page_url}>Go to Facebook Page</a>
                </div>
                <div className="search-result-card-info-buttons">
                  <button
                    onClick={() => history.push(`/${artist.name}/events`)}
                  >
                    {artist.upcoming_event_count} Upcoming Events
                  </button>
                  {/* <button>Like</button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="suggestions">
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
