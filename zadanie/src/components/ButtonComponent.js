import "../css/buttonComponentCss.css";

function ButtonComponent({ text, disabled, onButtonClick }) {
  function clickCallback() {
    console.log(onButtonClick);
    onButtonClick();
  }
  return (
    <button
      disabled={disabled}
      className={disabled ? "disabled" : "enabled"}
      onClick={() => clickCallback()}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
