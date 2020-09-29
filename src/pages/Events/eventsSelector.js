export default (events, filters) => {
  return events.filter(({ venue, datetime }) => {
    const nameMatch = venue.name
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const cityMatch = venue.city
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const countryMatch = venue.country
      .toLowerCase()
      .includes(filters.location.toLowerCase());
    const locationMatch = nameMatch || cityMatch || countryMatch;
    return locationMatch;
  });
};
