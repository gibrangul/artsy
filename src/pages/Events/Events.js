import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  fetchArtist,
  fetchSearchHistory,
  fetchFavorites,
  addToFavorites,
  removeFromFavorites,
} from "../../actions";
import bandsInTown from "../../apis/bandsInTown";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import EventsGrid from "../../components/EventsGrid/EventsGrid";
import "./events.scss";
import { ScaleLoader } from "react-spinners";
import eventsSelector from "./eventsSelector";
import FiltersBar from "../../components/FiltersBar/FiltersBar";

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
    dateStart: "",
    dateEnd: "",
  });

  const filteredEvents = eventsSelector(events, filters);

  useEffect(() => {
    dispatch(fetchSearchHistory());
    dispatch(fetchFavorites());
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

  return (
    <Fragment>
      <ScaleLoader
        height={35}
        width={4}
        radius={2}
        margin={2}
        color={"#5d67ff"}
        loading={loading}
        css={`
          position: absolute;
          top: 50%;
          left: 50%;
        `}
      />
      <div
        className={`events-page content ${loading ? "hide" : "show"}`}
        style={
          {
            // backgroundImage: ''
          }
        }
      >
        <div className="events-page_container">
          <div className="events-page_container_left mr-24">
            <div className="events-page_container_left_back mb-12">
              <button className="btn btn-link" onClick={() => history.goBack()}>
                Back To Search
              </button>
            </div>
            {artist && (
              <Fragment>
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
              </Fragment>
            )}
          </div>
          <div className="events-page_container_right">
            <FiltersBar onFilter={(filter) => setFilters(filter)} />
            <EventsGrid events={filteredEvents} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Events;
