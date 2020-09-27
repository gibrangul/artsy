import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchArtists } from "../../actions";
import "./home.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");
  const artist = useSelector(({ artist }) => artist);

  useEffect(() => {}, [dispatch]);

  const searchForArtist = (e) => {
    e.preventDefault();
    dispatch(fetchArtists(searchTerm));
  };

  return (
    <div>
      <form onSubmit={searchForArtist}>
        <input
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an Artist"
        />
        <button type="submit">Search</button>
      </form>

      <div onClick={() => history.push(`/${artist.name}/events`)}>
        <img alt={artist.name} src={artist.thumb_url} />
        <p>{artist.name}</p>
        <p>{artist.facebook_page_url}</p>
      </div>
    </div>
  );
};

export default Home;
