export const dateSuperScript = (day) => {
  switch (parseInt(day) % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const sortASC = (data, col) => {
  return data.sort((a, b) => (a[col] > b[col] ? 1 : -1));
};

export const sortDSC = (data, col) => {
  return data.sort((a, b) => (a[col] < b[col] ? 1 : -1));
};
