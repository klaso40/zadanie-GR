import { useState } from "react";
function MyInput({ title, placeholder }) {
  const [focused, setfocused] = useState(false);

  const blur = () => {
    setfocused(false);
  };
  const focus = () => {
    setfocused(true);
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
        id="name"
        onBlur={blur}
        onFocus={focus}
        placeholder={placeholder}
        className="w-full block focus:outline-none"
      />
    </label>
  );
}

export default MyInput;
