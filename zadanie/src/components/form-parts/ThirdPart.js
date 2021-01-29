import SummaryRow from "../SummaryRow";
import { useSelector } from "react-redux";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { previousPart } from "../../store/actions";
import MyAlert from "../MyAlert";
import { useState, useRef } from "react";
import ApiClient from "../../services/ApiClient";
function ThirdPart() {
  const help = useSelector((state) => state.help);
  const donation = useSelector((state) => state.donation);
  const name = useSelector((state) => state.name);
  const lastName = useSelector((state) => state.lastName);
  const email = useSelector((state) => state.email);
  const phoneNumber = useSelector((state) => state.phoneNumber.number);
  const phonePreset = useSelector((state) => state.phoneNumber.preset);
  const selectedShelter = useSelector((state) => state.selectedShelter);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [checked, setchecked] = useState(false);
  const [checkedError, setcheckedError] = useState(false);
  const alertRef = useRef(null);
  const [postingError, setPostingError] = useState(false);

  const onCheckboxChange = (value) => {
    if (!value) {
      setcheckedError(true);
    } else {
      setcheckedError(false);
    }
    setchecked(value);
  };

  const previous = () => {
    dispatch(previousPart());
  };
  const showAlert = () => {
    alertRef.current.classList.toggle("hidden");
    setTimeout(() => {
      if (alertRef.current) {
        alertRef.current.classList.toggle("hidden");
      }
    }, 5000);
  };
  const sendData = () => {
    if (!checked) {
      setcheckedError(true);
    } else {
      setLoading(true);
      let number = phonePreset + phoneNumber;
      number = number.slice(5);
      ApiClient.post(
        "https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute",
        {
          firstName: name,
          lastName: lastName,
          email: email,
          phone: phoneNumber !== "" ? number : "",
          value: parseInt(donation),
          shelterID: selectedShelter.id,
        }
      )
        .then((response) => {
          console.log(response.status);
          setPostingError(false);
          setLoading(false);
          showAlert();
        })
        .catch((error) => {
          console.error(error.message);
          setPostingError(true);
          setLoading(false);
          showAlert();
        });
    }
  };
  return (
    <div>
      <div ref={alertRef} className="hidden">
        <MyAlert
          text={
            postingError
              ? "Pri odosielaní formuláru sa vyskytla chyba!"
              : "Formulár sa podarilo úspešne odoslať!"
          }
          className={postingError ? "error-alert" : "success-alert"}
        />
      </div>
      <h1 className="headline-text-style">Skontrolujte si zadané údaje</h1>
      <SummaryRow
        label="Akou formou chcem pomôcť"
        text={
          help === 0
            ? "Chcem finančne prispieť konkrétnemu útulku"
            : "Chcem finančne prispieť celej nadácii"
        }
      />
      {selectedShelter ? (
        <SummaryRow
          label="Najviac mi záleží na útulku"
          text={selectedShelter.name}
        />
      ) : (
        ""
      )}

      <SummaryRow label="Suma ktorou chcem pomôcť" text={donation + " €"} />
      <SummaryRow label="Meno a priezvisko" text={name + " " + lastName} />
      {email !== "" ? <SummaryRow label="E-mailová adresa" text={email} /> : ""}

      {phoneNumber !== "" ? (
        <SummaryRow
          label="Telefónne číslo"
          text={phonePreset + " " + phoneNumber}
        />
      ) : (
        ""
      )}
      <label className="flex items-center">
        <input
          type="checkbox"
          name=""
          id=""
          className="w-4 h-4"
          onChange={(event) => onCheckboxChange(event.target.checked)}
        />
        <p className="ml-2 text-subHeadlineColor text-sm">
          Súhlasím so spracovaním mojich osobných údajov
        </p>
      </label>
      {checkedError ? (
        <span className="text-sm text-red-500">Toto pole je povinné!</span>
      ) : (
        ""
      )}

      <div className={"flex flex-row justify-between mt-16 mb-5"}>
        <ButtonComponent
          text="Späť"
          className="back-button"
          onButtonClick={() => previous()}
        />
        <ButtonComponent
          text={loading ? "Odosielam..." : "Odoslať"}
          loading={loading}
          className={loading ? "back-button" : "next-button"}
          disabled={loading}
          onButtonClick={() => sendData()}
        />
      </div>
    </div>
  );
}

export default ThirdPart;
