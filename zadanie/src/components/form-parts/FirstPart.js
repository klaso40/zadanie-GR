import Donation from "../DonationComponent";
import MySelect from "../MySelect";
import SwitchHelp from "../SwitchHelpComponent";
import ButtonComponent from "../ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { nextPart } from "../../store/actions";
import { useState } from "react";

function FirstPart() {
  const dispatch = useDispatch();
  const help = useSelector((state) => state.help);
  const selectedShelter = useSelector((state) => state.selectedShelter);
  const donation = useSelector((state) => state.donation);
  const [selectShelterError, setSelectShelterError] = useState("");
  const [donationError, setDonationError] = useState("");
  const validateSelectShelter = () => {
    if (help === 0 && selectedShelter === "") {
      return "Prosím vyberte útulok";
    } else {
      return "";
    }
  };
  const validateDonationValue = () => {
    if (isNaN(donation) || donation === "") {
      return "Zadajte platnú hodnotu príspevku";
    } else if (parseInt(donation) < 1) {
      return "Minimálna výška príspevku je 1 €";
    } else {
      return "";
    }
  };
  const next = () => {
    let donationErr = validateDonationValue();
    setDonationError(donationErr);
    let shelterErr = validateSelectShelter();
    setSelectShelterError(shelterErr);
    console.log(donationErr === "");
    if (donationErr === "" && shelterErr === "") {
      dispatch(nextPart());
    }
  };
  return (
    <div>
      <h1 className="headline-text-style">
        Vyberte si možnosť, ako chcete pomôcť
      </h1>
      <SwitchHelp />
      <div className="mt-14">
        <div className="flex flex-row justify-between">
          <h3 className="text-headlineColor font-bold">
            Najviac mi záleží na útulku
          </h3>
          {help === 1 ? (
            <aside className="text-subHeadlineColor font-bold">Nepovinné</aside>
          ) : (
            ""
          )}
        </div>
        <MySelect label="Útulok" placeholder="Vyberte útulok zo zoznamu" />
        {setSelectShelterError !== "" &&
        help === 0 &&
        selectedShelter === "" ? (
          <span className="text-sm text-red-500">{selectShelterError}</span>
        ) : (
          ""
        )}

        <Donation />
        {donationError !== "" ? (
          <span className="text-sm text-red-500">{donationError}</span>
        ) : (
          ""
        )}
      </div>
      <div className={"flex flex-row justify-end mt-16 mb-5"}>
        <ButtonComponent
          text="Pokračovať"
          disabled={false}
          onButtonClick={() => next()}
        />
      </div>
    </div>
  );
}

export default FirstPart;
