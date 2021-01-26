export const setShelterHelp = () => {
  return {
    type: "SHELTER_HELP",
  };
};

export const setFoundationHelp = () => {
  return {
    type: "FOUNDATION_HELP",
  };
};

export const setDonationValue = (amount) => {
  return {
    type: "SET_DONATION_VALUE",
    payload: amount,
  };
};
