import { useState } from "react";
import "../css/inputComponentCss.css";
function MyInput({
  title,
  placeholder,
  value,
  onChange,
  type = "text",
  errorMessage = "",
  onBlur,
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
        for="name"
        className={
          errorMessage !== ""
            ? "error"
            : focused
            ? "active-border "
            : "unactive-border"
        }
      >
        <h3 className="text-headlineColor font-bold mt-2">{title}</h3>
        <input
          type={type}
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
      <span className="text-sm text-red-500">{errorMessage}</span>
    </div>
  );
}

export default MyInput;
