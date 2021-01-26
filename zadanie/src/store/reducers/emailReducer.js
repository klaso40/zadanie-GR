const emailReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return (state = action.payload);
    default:
      return state;
  }
};

export default emailReducer;
