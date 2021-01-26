import { useState } from "react";
import "../css/inputComponentCss.css";
function MyInput({ title, placeholder, value, onChange }) {
  const [focused, setfocused] = useState(false);

  const blur = () => {
    setfocused(false);
  };
  const focus = () => {
    setfocused(true);
  };
  const onChangeCallback = (value) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <label
      for="name"
      className={focused ? "active-border " : "unactive-border"}
    >
      <h3 className="text-headlineColor font-bold mt-2">{title}</h3>
      <input
        type="text"
        name=""
        id={title}
        onBlur={blur}
        onFocus={focus}
        value={value}
        onChange={(event) => onChangeCallback(event.target.value)}
        placeholder={placeholder}
        className="w-full block focus:outline-none"
      />
    </label>
  );
}

export default MyInput;
