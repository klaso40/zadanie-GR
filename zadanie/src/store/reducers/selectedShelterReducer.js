const selectedShelterReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SHELTER":
      return (state = action.payload);
    default:
      return state;
  }
};

export default selectedShelterReducer;
