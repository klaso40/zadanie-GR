const donationReducer = (state = 5, action) => {
  switch (action.type) {
    case "SET_DONATION_VALUE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default donationReducer;
