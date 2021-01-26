import "../css/buttonComponentCss.css";

function ButtonComponent({ text, disabled, onButtonClick }) {
  const clickCallback = () => {
    onButtonClick();
  };
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
