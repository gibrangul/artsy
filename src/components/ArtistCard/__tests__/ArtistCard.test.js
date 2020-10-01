import { shallow } from "enzyme";
import React from "react";
import ArtistCard from "../ArtistCard";

describe("Artist Card", () => {
  let wrapped;

  const artist = {
    thumb_url: "https://photos.bandsintown.com/thumb/8285304.jpeg",
    mbid: "b95ce3ff-3d05-4e87-9e01-c97b66af13d4",
    support_url: "",
    facebook_page_url: "http://www.facebook.com/45309870078",
    image_url: "https://photos.bandsintown.com/large/8285304.jpeg",
    name: "Eminem",
    id: "1754",
    tracker_count: 7530715,
    upcoming_event_count: 0,
    url: "https://www.bandsintown.com/a/1754?came_from=267&app_id=aaa",
    searchDate: 1601526454,
    addDate: 1601526458,
  };

  const eventText =
    artist.upcoming_event_count > 0
      ? `${artist.upcoming_event_count} Event${
          artist.upcoming_event_count > 1 && "s"
        }`
      : "No Events";

  beforeEach(() => {
    wrapped = shallow(
      <ArtistCard artist={artist} favorite={{ liked: true }} />
    );
  });

  it("shows an artist image", (done) => {
    expect(wrapped.find("img").prop("src")).toEqual(artist.image_url);
    done();
  });

  it("shows the correct title and facebook page", (done) => {
    expect(wrapped.render().text()).toContain(artist.name);
    if (artist.facebook_page_url) {
      expect(
        wrapped.findWhere((n) => n.prop("name") === "facebookLink").prop("url")
      ).toEqual(artist.facebook_page_url);
    }
    done();
  });

  it("shows the upcoming events button", (done) => {
    const buttonContainer = wrapped.find(".artist-card-info-buttons");
    expect(buttonContainer.find("button").render().text()).toContain(eventText);
    done();
  });

  it("shows the like button", (done) => {
    expect(wrapped.find(".btn-round-icon").length).toEqual(1);
    done();
  });
});
