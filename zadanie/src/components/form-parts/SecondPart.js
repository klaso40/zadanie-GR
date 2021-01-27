import MyInput from "../MyInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../ButtonComponent";
import {
  nextPart,
  previousPart,
  setEmail,
  setLastName,
  setName,
  setPhoneNumber,
} from "../../store/actions";
function SecondPart() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const lastName = useSelector((state) => state.lastName);
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const email = useSelector((state) => state.email);

  // Error Messages
  const [nameErrorMessage, setnameErrorMessage] = useState("");
  const [lastNameErrorMessage, setlastNameErrorMessage] = useState("");
  const [emailErrorMessage, setemailErrorMessage] = useState("");
  const [phoneNumberErrorMessage, setphoneNumberErrorMessage] = useState("");

  const previous = () => {
    dispatch(previousPart());
  };
  const next = () => {
    let nameError = validate(nameRules, name);
    setnameErrorMessage(nameError);
    let lastNameError = validate(lastNameRules, lastName);
    setlastNameErrorMessage(lastNameError);
    let emailError = validate(emailRules, email);
    setemailErrorMessage(emailError);
    let phoneNumberError = validate(phoneNumberRules, phoneNumber);
    setphoneNumberErrorMessage(phoneNumberError);

    if (
      nameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      phoneNumberError === ""
    ) {
      dispatch(nextPart());
    }
  };

  // Rules
  const nameRules = {
    required: true,
    minLength: 3,
  };
  const lastNameRules = {
    required: true,
    minLength: 3,
  };
  const emailRules = {
    required: true,
    email: true,
  };
  const phoneNumberRules = {
    required: true,
    phoneNumber: true,
  };

  // Validation
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePhoneNumber = (number) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(number);
  };
  const validate = (rules, value) => {
    if (rules) {
      if (rules.required && value === "") {
        return `Toto pole je povinné!`;
      } else if (rules.minLength && value.length < rules.minLength) {
        return `Minimálna dĺžka sú ${rules.minLength} znaky!`;
      } else if (rules.email) {
        if (!validateEmail(value)) {
          return `Zadajte platný E-mail`;
        } else {
          return ``;
        }
      } else if (rules.phoneNumber) {
        if (!validatePhoneNumber(value)) {
          return `Zadajte platné telefónne číslo`;
        } else {
          return ``;
        }
      } else {
        return ``;
      }
    }
  };

  const validateName = (value) => {
    setnameErrorMessage(validate(nameRules, value));
  };
  const validateLastName = (value) => {
    setlastNameErrorMessage(validate(lastNameRules, value));
  };
  const validateEmailField = (value) => {
    setemailErrorMessage(validate(emailRules, value));
  };
  const validatePhoneNumberField = (value) => {
    setphoneNumberErrorMessage(validate(phoneNumberRules, value));
  };
  return (
    <div>
      <h1 className="text-headlineColor text-5xl font-bold my-7">
        Potrebujeme od Vás <br /> zopár informácií
      </h1>
      <h2 className="text-subHeadlineColor font-bold text-sm mt-11">O vás</h2>
      <MyInput
        title="Meno"
        value={name}
        onBlur={(value) => validateName(value)}
        errorMessage={nameErrorMessage}
        placeholder="Zadajte Vaše meno"
        onChange={(value) => dispatch(setName(value))}
      />
      <MyInput
        title="Priezvisko"
        value={lastName}
        onBlur={(value) => validateLastName(value)}
        errorMessage={lastNameErrorMessage}
        placeholder="Zadajte Vaše priezvisko"
        onChange={(value) => dispatch(setLastName(value))}
      />
      <MyInput
        title="E-mailová adresa"
        value={email}
        onBlur={(value) => validateEmailField(value)}
        errorMessage={emailErrorMessage}
        type="email"
        placeholder="Zadajte Váš e-mail"
        onChange={(value) => dispatch(setEmail(value))}
      />
      <MyInput
        title="Telefónne číslo"
        value={phoneNumber}
        onBlur={(value) => validatePhoneNumberField(value)}
        errorMessage={phoneNumberErrorMessage}
        type="number"
        placeholder="🇸🇰 +421"
        onChange={(value) => dispatch(setPhoneNumber(value))}
      />

      <div className={"flex flex-row justify-between mt-16 mb-5"}>
        <ButtonComponent text="Späť" onButtonClick={() => previous()} />

        <ButtonComponent
          text="Pokračovať"
          disabled={false}
          onButtonClick={() => next()}
        />
      </div>
    </div>
  );
}

export default SecondPart;
