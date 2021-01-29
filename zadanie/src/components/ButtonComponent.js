import "../css/buttonComponentCss.css";

function ButtonComponent({ text, disabled, onButtonClick, className }) {
  const clickCallback = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={() => clickCallback()}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
