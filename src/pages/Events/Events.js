import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchArtist } from "../../actions";
import bandsInTown from "../../apis/bandsInTown";
import "./events.scss";

const Events = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);
  const artistName = match.params.artist;

  const artist = useSelector(({ artist }) => artist);

  useEffect(() => {
    if (!artist || artist.name !== artistName) {
      dispatch(fetchArtist(artistName));
    }
    const fetchEvents = async () => {
      const response = await bandsInTown.get(`/artists/${artistName}/events`);
      setEvents(response.data);
    };
    fetchEvents();
  }, [artistName, dispatch, artist]);
  console.log(events);
  return (
    <div>
      <p onClick={() => history.goBack()}>Back To Search</p>
      {Object.values(events).map((item) => {
        return (
          <p key={item.id}>
            {item.venue.name}
            {item.venue.city}
            {item.venue.country}
            {item.datetime}
          </p>
        );
      })}
    </div>
  );
};

export default Events;
