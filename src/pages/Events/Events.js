import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchEvents } from "../../actions";
import "./events.scss";

const Events = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const events = useSelector(({ events }) => events);

  const artistName = match.params.artist;
  console.log();
  useEffect(() => {
    dispatch(fetchEvents(artistName));
  }, [dispatch, artistName]);
  return (
    <div>
      <p onClick={() => history.goBack()}>Back To Search</p>
      {Object.values(events).map((item) => {
        return (
          <p>
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
