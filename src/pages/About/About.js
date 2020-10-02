import React, { useState, useEffect } from "react";
import NewTabLink from "../../components/NewTabLink";

const About = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
  }, []);

  return (
    <div
      className={`content ${loading ? "hide" : "show"} flex-column flex-center`}
    >
      <h1 className="mt-48">
        About <span className="primary-text">Artsy</span>
      </h1>
      <h2
        className="text-justify mt-24 normal-font"
        style={{
          maxWidth: "560px",
          wordBreak: "break-word",
          padding: "0 24px",
          lineHeight: "1.75em",
        }}
      >
        Powered by{" "}
        {
          <NewTabLink
            url="https://www.bandsintown.com/"
            className="primary-text"
          >
            Bandsintown
          </NewTabLink>
        }
        , Artsy is a search engine for upcoming events by your favorite
        muscians. Artsy can help you find events from accross the globe. <br />
        Bookmark your favorite artists to keep track of events near you. Artsy
        saves your searches incase you forget your favorite artist's name (yes,
        it happens to the best of us).
        <br />
        <br />
        Privacy First:
        <br /> Easiliy clear your history and favorites with the click of a
        button.
      </h2>
    </div>
  );
};
export default About;
