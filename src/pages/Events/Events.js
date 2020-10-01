import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToFavorites,
  fetchArtist,
  fetchFavorites,
  fetchSearchHistory,
  removeFromFavorites,
} from "../../actions";
import bandsInTown from "../../apis/bandsInTown";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import EventsGrid from "../../components/EventsGrid/EventsGrid";
import FiltersBar from "../../components/FiltersBar/FiltersBar";
import SiteLoader from "../../components/SiteLoader";
import "./events.scss";
import eventsSelector from "./eventsSelector";

const Events = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const artistName = match.params.artist;

  const artist = useSelector(({ artist }) => artist);
  const favorites = useSelector(({ favorites }) => favorites);

  const [filters, setFilters] = useState({
    location: "",
    dateStart: null,
    dateEnd: null,
  });

  const filteredEvents = eventsSelector(events, filters);

  useEffect(() => {
    dispatch(fetchSearchHistory());
    dispatch(fetchFavorites());

    // Used a direct link to the events page is used
    if (!artist || artist.name !== artistName) {
      dispatch(fetchArtist(artistName));
    }

    const fetchEvents = async () => {
      const response = await bandsInTown.get(`/artists/${artistName}/events`);
      setEvents(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchEvents();
  }, [artistName, dispatch, artist]);

  const onFavoriteClick = () => {
    if (!favorites[artist.id]) {
      dispatch(addToFavorites(artist));
    } else {
      dispatch(removeFromFavorites(artist.id));
    }
  };

  return (
    <Fragment>
      <SiteLoader loading={loading} absolute={true} />
      <div
        className={`events-page content ${
          loading ? "hide" : "show"
        } flex-column flex-center`}
      >
        <div className="events-page_container">
          <div className="events-page_container_left mr-24">
            <div className="events-page_container_left_header mb-12">
              <button className="btn btn-link" onClick={() => history.goBack()}>
                Back To Search
              </button>
            </div>
            {artist && (
              <ArtistCard
                artist={artist}
                favorite={{
                  liked: favorites[artist.id] ? true : false,
                  onClick: onFavoriteClick,
                }}
              />
            )}
          </div>
          <div className="events-page_container_right">
            <FiltersBar
              onFilter={(filter) =>
                setFilters((prevFilters) => ({ ...prevFilters, ...filter }))
              }
            />
            <EventsGrid events={filteredEvents} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Events;
