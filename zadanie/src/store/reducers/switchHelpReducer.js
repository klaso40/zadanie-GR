const switchReducer = (state = 0, action) => {
  switch (action.type) {
    case "SHELTER_HELP":
      return (state = 0);
    case "FOUNDATION_HELP":
      return (state = 1);
    default:
      return state;
  }
};

export default switchReducer;
