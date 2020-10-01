import moment from "moment";

export default (events, { location, dateStart, dateEnd }) => {
  return events.filter(({ venue, datetime }) => {
    const { name, city, country } = venue;
    const nameMatch = name.toLowerCase().includes(location.toLowerCase());

    const cityMatch = city.toLowerCase().includes(location.toLowerCase());

    const countryMatch = country.toLowerCase().includes(location.toLowerCase());

    const locationMatch = nameMatch || cityMatch || countryMatch;

    const startDateMatch = dateStart
      ? moment(datetime).unix() >= moment(dateStart).unix()
      : true;

    const endDateMatch = dateEnd
      ? moment(datetime).unix() <=
        moment(dateEnd)
          .add(23, "hours")
          .add(59, "minutes")
          .add(59, "seconds")
          .unix()
      : true;

    return locationMatch && startDateMatch && endDateMatch;
  });
};
