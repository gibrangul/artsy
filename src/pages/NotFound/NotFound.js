import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
  }, []);

  return (
    <div
      className={`content ${loading ? "hide" : "show"} flex-column flex-center`}
    >
      <h1 className="mt-24 semi-bold e-404">404</h1>
      <h2 className="normal-font">Oooops</h2>
      <Link to="/" className="btn btn-primary mt-24 mb-24">
        Go Back
      </Link>
    </div>
  );
};
export default NotFound;
