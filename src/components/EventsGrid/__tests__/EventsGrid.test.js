import React from "react";
import { mount } from "enzyme";
import EventsGrid from "../EventsGrid";

describe("Events Grid Grid", () => {
  let wrapped;
  const data = [
    {
      offers: [
        {
          type: "Tickets",
          url:
            "https://www.bandsintown.com/t/1020634814?app_id=aaa&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
          status: "available",
        },
      ],
      venue: {
        country: "United States",
        city: "Chula Vista",
        latitude: "32.58774339999999",
        name: "North Island Credit Union Amphitheatre",
        location: "Chula Vista, CA",
        region: "CA",
        longitude: "-117.0063651",
      },
      datetime: "2021-07-15T19:00:00",
      artist: {
        thumb_url: "https://photos.bandsintown.com/thumb/8479721.jpeg",
        mbid: "0ab49580-c84f-44d4-875f-d83760ea2cfe",
        support_url: "",
        facebook_page_url: "http://www.facebook.com/5330548481",
        image_url: "https://photos.bandsintown.com/large/8479721.jpeg",
        name: "Maroon 5",
        options: {
          display_listen_unit: false,
        },
        id: "510",
        tracker_count: 5755084.0,
        upcoming_event_count: 40.0,
        url: "https://www.bandsintown.com/a/510?came_from=267&app_id=aaa",
      },
      on_sale_datetime: "2019-12-13T12:00:00",
      description:
        "Rain or shine. Every ticket includes parking in the unpaved lots. General parking gates typically open at 4PM on day of show. Upgrades are available for premier parking in the paved lots and closer to the venue entrance. Upgrades are also available for Early Bird Tailgate Lot which grants access to park 2 hours prior up until general parking gates open.",
      lineup: ["Maroon 5", "Meghan Trainor"],
      id: 1020634814,
      title: "",
      artist_id: "510",
      url:
        "https://www.bandsintown.com/e/1020634814?app_id=aaa&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    },
    {
      offers: [
        {
          type: "Tickets",
          url:
            "https://www.bandsintown.com/t/1020634814?app_id=aaa&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket",
          status: "available",
        },
      ],
      venue: {
        country: "United States",
        city: "Chula Vista",
        latitude: "32.58774339999999",
        name: "North Island Credit Union Amphitheatre",
        location: "Chula Vista, CA",
        region: "CA",
        longitude: "-117.0063651",
      },
      datetime: "2021-07-15T19:00:00",
      artist: {
        thumb_url: "https://photos.bandsintown.com/thumb/8479721.jpeg",
        mbid: "0ab49580-c84f-44d4-875f-d83760ea2cfe",
        support_url: "",
        facebook_page_url: "http://www.facebook.com/5330548481",
        image_url: "https://photos.bandsintown.com/large/8479721.jpeg",
        name: "Maroon 5",
        options: {
          display_listen_unit: false,
        },
        id: "510",
        tracker_count: 5755084.0,
        upcoming_event_count: 40.0,
        url: "https://www.bandsintown.com/a/510?came_from=267&app_id=aaa",
      },
      on_sale_datetime: "2019-12-13T12:00:00",
      description:
        "Rain or shine. Every ticket includes parking in the unpaved lots. General parking gates typically open at 4PM on day of show. Upgrades are available for premier parking in the paved lots and closer to the venue entrance. Upgrades are also available for Early Bird Tailgate Lot which grants access to park 2 hours prior up until general parking gates open.",
      lineup: ["Maroon 5", "Meghan Trainor"],
      id: 1020634114,
      title: "",
      artist_id: "510",
      url:
        "https://www.bandsintown.com/e/1020634814?app_id=aaa&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event",
    },
  ];

  beforeEach(() => {
    wrapped = mount(<EventsGrid events={data} />);
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("displays a list of events", (done) => {
    expect(wrapped.find(".events-grid_item").length).toEqual(data.length);
    done();
  });
});
