const formReducer = (state = 1, action) => {
  switch (action.type) {
    case "NEXT_PART":
      return (state += 1);
    case "PREVIOUS_PART":
      return (state -= 1);
    default:
      return state;
  }
};

export default formReducer;
