import "../css/buttonComponentCss.css";
import "../assets/LoadingSpinner";
import LoadingSpinner from "../assets/LoadingSpinner";

function ButtonComponent({
  text,
  disabled,
  onButtonClick,
  className,
  loading = false,
}) {
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
      <div className="flex flex-row">
        {loading ? <LoadingSpinner /> : ""}
        {text}
      </div>
    </button>
  );
}

export default ButtonComponent;
