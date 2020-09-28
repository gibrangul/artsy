export default () => {
  const searchStorage = window.localStorage.getItem("searchHistory");

  const searchHistory = searchStorage ? JSON.parse(searchStorage) : [];
  return searchHistory;
};
