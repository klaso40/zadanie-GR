import SummaryRow from "../SummaryRow";
import { useSelector } from "react-redux";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { previousPart } from "../../store/actions";
import MyAlert from "../MyAlert";
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

  const previous = () => {
    dispatch(previousPart());
  };
  return (
    <div>
      <MyAlert />
      <h1 className="headline-text-style">Skontrolujte si zadané údaje</h1>
      <SummaryRow
        label="Akou formou chcem pomôcť"
        text={
          help === 0
            ? "Chcem finančne prispieť konkrétnemu útulku"
            : "Chcem finančne prispieť celej nadácii"
        }
      />
      {selectedShelter !== "" ? (
        <SummaryRow
          label="Najviac mi záleží na útulku"
          text={selectedShelter}
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
        <input type="checkbox" name="" id="" className="w-4 h-4" />
        <p className="ml-2 text-subHeadlineColor text-sm">
          Súhlasím so spracovaním mojich osobných údajov
        </p>
      </label>

      <div className={"flex flex-row justify-between mt-16 mb-5"}>
        <ButtonComponent
          text="Späť"
          className="back-button"
          onButtonClick={() => previous()}
        />
        <ButtonComponent
          text="Odoslať"
          className="next-button"
          disabled={false}
        />
      </div>
    </div>
  );
}

export default ThirdPart;
