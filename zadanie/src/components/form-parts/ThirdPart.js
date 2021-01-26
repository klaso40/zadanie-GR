import SummaryRow from "../SummaryRow";
import { useSelector } from "react-redux";
function ThirdPart() {
  const help = useSelector((state) => state.help);
  const donation = useSelector((state) => state.donation);
  const name = useSelector((state) => state.name);
  const lastName = useSelector((state) => state.lastName);
  const email = useSelector((state) => state.email);
  const phoneNumber = useSelector((state) => state.phoneNumber);
  return (
    <div>
      <h1 className="text-headlineColor text-5xl font-bold my-7">
        Skotrolujte si zadané údaje
      </h1>
      <SummaryRow
        label="Akou formou chcem pomôcť"
        text={
          help === 0
            ? "Chcem finančne prispieť konkrétnemu útulku"
            : "Chcem finančne prispieť celej nadácii"
        }
      />
      <SummaryRow label="Najviac mi záleží na útulku" text="" />
      <SummaryRow label="Suma ktorou chcem pomôcť" text={donation + " €"} />
      <SummaryRow label="Meno a priezvisko" text={name + " " + lastName} />
      <SummaryRow label="E-mailová adresa" text={email} />
      <SummaryRow label="Telefónne číslo" text={phoneNumber} />
    </div>
  );
}

export default ThirdPart;
