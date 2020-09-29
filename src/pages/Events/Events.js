import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchArtist } from "../../actions";
import bandsInTown from "../../apis/bandsInTown";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import EventsGrid from "../../components/EventsGrid/EventsGrid";
import "./events.scss";
import { ScaleLoader } from "react-spinners";

const Events = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const artistName = match.params.artist;

  const artist = useSelector(({ artist }) => artist);

  useEffect(() => {
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
  console.log(events);

  return (
    <div className="events-page content">
      {loading ? (
        <div
          className="flex-row flex-center"
          style={{ height: "calc(100vh - 84px)" }}
        >
          <ScaleLoader
            height={35}
            width={4}
            radius={2}
            margin={2}
            color={"#5d67ff"}
            loading={loading}
          />
        </div>
      ) : (
        <Fragment>
          <div className="events-page_header">
            <button className="btn btn-link" onClick={() => history.goBack()}>
              Back To Search
            </button>
            <p>Filters</p>
          </div>
          <div className="events-page_data">
            <div className="events-page_data_sidebar">
              {artist && <ArtistCard artist={artist} />}
            </div>
            <EventsGrid events={Object.values(events)} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Events;
