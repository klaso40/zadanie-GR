const phoneNumberReducer = (
  state = {
    preset: "🇸🇰 +421",
    number: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_PHONE_NUMBER":
      let newState = state;
      newState.number = action.payload;
      return newState;
    case "SET_PHONE_PRESET":
      let newState2 = state;
      newState2.preset = action.payload;
      return newState2;
    default:
      return state;
  }
};

export default phoneNumberReducer;
