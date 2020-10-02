import React from "react";
import { shallow } from "enzyme";
import ArtistGrid from "../ArtistGrid";
import ArtistGridItem from "../ArtistGridItem";

describe("Artist Grid", () => {
  let wrapped;

  const title = "Favorites";
  const actionTitle = "See more";
  const data = [
    {
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
    },
  ];

  beforeEach(() => {
    wrapped = shallow(
      <ArtistGrid title={title} data={data} actionTitle={actionTitle} />
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("displays a message when there is no data", (done) => {
    wrapped = shallow(<ArtistGrid title={title} data={[]} />);
    expect(wrapped.render().text()).toContain(`Your ${title} will appear here`);
    done();
  });

  it("displays a header", (done) => {
    expect(wrapped.render().text()).toContain(title);
    expect(wrapped.render().text()).toContain(actionTitle);
    done();
  });

  it("displays a card list with a title", (done) => {
    expect(wrapped.find(".artist-grid_list").length).toEqual(1);
    expect(wrapped.find(ArtistGridItem).length).toEqual(data.length);
    done();
  });
});
