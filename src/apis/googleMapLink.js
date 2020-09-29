export default (lat, long) => {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${long}`;
};
