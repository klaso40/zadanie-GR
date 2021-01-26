import "../css/buttonComponentCss.css";
function ButtonComponent({ text, disabled }) {
  return (
    <button disabled={disabled} className={disabled ? "disabled" : "enabled"}>
      {text}
    </button>
  );
}

export default ButtonComponent;
