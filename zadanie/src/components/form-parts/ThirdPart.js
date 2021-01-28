import SummaryRow from "../SummaryRow";
import { useSelector } from "react-redux";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { previousPart } from "../../store/actions";
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
      <h1 className="text-headlineColor text-5xl font-bold my-7">
        Skontrolujte si zadané údaje
      </h1>
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

      <div className={"flex flex-row justify-between mt-16 mb-5"}>
        <ButtonComponent text="Späť" onButtonClick={() => previous()} />

        <ButtonComponent text="Odoslať" disabled={false} />
      </div>
    </div>
  );
}

export default ThirdPart;
