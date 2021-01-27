import { useSelector, useDispatch } from "react-redux";
import { setDonationValue } from "../store/actions";
import "../css/donationComponentCss.css";
function Donation() {
  const donationValue = useSelector((state) => state.donation);
  const donationValues = [5, 10, 20, 30, 50, 100];
  const dispath = useDispatch();

  return (
    <div className="mt-11 ">
      <label className="text-headlineColor font-bold">
        Suma, ktorou chcem prispieť
      </label>
      <div className="mt-3.5 flex flex-row justify-between">
        {donationValues.map((value, index) => {
          return (
            <div
              className={
                donationValue === value ? "active-value" : "unactive-value"
              }
              key={index}
              onClick={() => dispath(setDonationValue(value))}
            >
              <span className="font-bold text-lg">{value} €</span>
            </div>
          );
        })}
        <label
          htmlFor="customValue"
          className={
            donationValues.includes(donationValue)
              ? "unactive-value"
              : "active-value"
          }
        >
          <input
            id="customValue"
            value={donationValues.includes(donationValue) ? 0 : donationValue}
            type="number"
            className="w-1/2 border-b-2 font-bold text-lg bg-transparent border-borderColor focus:outline-none"
            onChange={(event) => dispath(setDonationValue(event.target.value))}
          />
          <span className="font-bold text-lg">€</span>
        </label>
      </div>
    </div>
  );
}

export default Donation;
