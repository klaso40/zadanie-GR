import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DropDown from "../assets/dropdown.svg";
import "../css/selectComponent.css";
import { setShelter } from "../store/actions";

function MySelect({ label, placeholder }) {
  const shelters = useSelector((state) => state.shelters);
  const [isOpen, setIsOpen] = useState(false);
  const selectedShelter = useSelector((state) => state.selectedShelter);
  const dispatch = useDispatch();

  const onSelectedItem = (value) => {
    setIsOpen(false);
    dispatch(setShelter(value));
  };
  return (
    <div className="relative">
      <label
        htmlFor="name"
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "active-select " : "unactive-select"}
      >
        <div className="flex flex-rows w-full justify-between items-center">
          <div className="w-full">
            <h3 className="text-headlineColor font-bold mt-2">{label}</h3>
            <input
              type="text"
              name=""
              readOnly
              value={selectedShelter}
              id={label}
              placeholder={placeholder}
              className="w-full block focus:outline-none"
            />
          </div>
          <img
            src={DropDown}
            alt=""
            className={
              isOpen
                ? "transform rotate-180 transition-all"
                : "transform rotate-0 transition-all"
            }
          />
        </div>
      </label>

      <ul className={isOpen ? "expanded-select" : "unexpanded-select"}>
        {shelters.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onSelectedItem(item.name)}
              className="font-bold text-lg px-5 py-2 text-gray-900 hover:bg-primaryColor hover:text-white cursor-pointer"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MySelect;
