const phoneNumberReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_PHONE_NUMBER":
      return (state = action.payload);
    default:
      return state;
  }
};

export default phoneNumberReducer;
