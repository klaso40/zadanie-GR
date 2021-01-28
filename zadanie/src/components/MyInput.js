import { useState } from "react";
import "../css/inputComponentCss.css";
import React from "react";
import PhonePresetSelect from "./PhonePresetSelect";
function MyInput({
  title,
  placeholder,
  value,
  onChange,
  type = "text",
  errorMessage = "",
  readOnly = false,
  onBlur,
  slot,
}) {
  const [focused, setfocused] = useState(false);

  const blur = () => {
    setfocused(false);
    if (onBlur) {
      onBlur(value);
    }
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
    <div>
      <label
        htmlFor="name"
        className={
          errorMessage !== ""
            ? "error"
            : focused
            ? "active-border "
            : "unactive-border"
        }
      >
        <h3 className="text-headlineColor font-bold mt-2">{title}</h3>
        <div className="flex flex-row">
          {type === "tel" ? <PhonePresetSelect></PhonePresetSelect> : ""}
          <input
            type={type}
            name=""
            readOnly={readOnly}
            id={title}
            onBlur={blur}
            onFocus={focus}
            value={value}
            onChange={(event) => onChangeCallback(event.target.value)}
            placeholder={placeholder}
            className={
              type === "tel"
                ? "w-2/3 block focus:outline-none md:w-10/12"
                : "w-full block focus:outline-none"
            }
          />
        </div>
      </label>
      <span className="text-sm text-red-500">{errorMessage}</span>
    </div>
  );
}

export default MyInput;
