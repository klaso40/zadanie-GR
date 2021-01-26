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

export const nextPart = () => {
  return {
    type: "NEXT_PART",
  };
};

export const previousPart = () => {
  return {
    type: "PREVIOUS_PART",
  };
};

export const setName = (value) => {
  return {
    type: "SET_NAME",
    payload: value,
  };
};

export const setLastName = (value) => {
  return {
    type: "SET_LAST_NAME",
    payload: value,
  };
};

export const setEmail = (value) => {
  return {
    type: "SET_EMAIL",
    payload: value,
  };
};

export const setPhoneNumber = (value) => {
  return {
    type: "SET_PHONE_NUMBER",
    payload: value,
  };
};
