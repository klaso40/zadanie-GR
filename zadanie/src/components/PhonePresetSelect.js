import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPhonePreset } from "../store/actions";
function PhonePresetSelect() {
  const [isOpen, setisOpen] = useState(false);
  const phonePreset = useSelector((state) => state.phoneNumber.preset);
  const dispatch = useDispatch();
  const setNewValue = (value) => {
    setisOpen(false);
    dispatch(setPhonePreset(value));
  };
  return (
    <div>
      <ul className={isOpen ? "w-15 z-10 absolute bg-white" : "hidden"}>
        <li
          className="hover: cursor-pointer"
          onClick={() => setNewValue(phonePreset)}
        >
          {phonePreset}
        </li>
        <li
          className="hover: cursor-pointer"
          onClick={() =>
            setNewValue(phonePreset === "🇸🇰 +421" ? "🇨🇿 +420" : "🇸🇰 +421")
          }
        >
          {phonePreset === "🇨🇿 +420" ? "🇸🇰 +421" : "🇨🇿 +420"}
        </li>
      </ul>
      <div
        className="flex flex-row hover: cursor-pointer"
        onClick={() => setisOpen(!isOpen)}
      >
        <div className="mr-1 ">{phonePreset}</div>
      </div>
    </div>
  );
}

export default PhonePresetSelect;
