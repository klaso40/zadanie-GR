const lastNameReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_LAST_NAME":
      return (state = action.payload);
    default:
      return state;
  }
};

export default lastNameReducer;
