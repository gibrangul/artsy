import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchFavorites, clearFavorites } from "../../actions";
import ArtistGrid from "../../components/ArtistGrid/ArtistGrid";
import { sortDSC } from "../../utils/general";
import "./favorites.scss";

const Favorites = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchFavorites());
      setLoading(false);
    }, 400);
  }, [dispatch]);

  return (
    <div className={`favorites-page content ${loading ? "hide" : "show"}`}>
      <div className="page-container">
        <ArtistGrid
          showMessage={true}
          title="Favorites"
          actionTitle="Clear Favorites"
          headerAction={() => dispatch(clearFavorites())}
          data={sortDSC(Object.values(favorites), "addDate")}
          artistClick={({ name }) => history.push(`/${name}/events`)}
        />
      </div>
    </div>
  );
};

export default Favorites;
