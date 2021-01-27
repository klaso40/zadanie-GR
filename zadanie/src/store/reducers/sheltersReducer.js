const sheltersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SHELTERS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default sheltersReducer;
