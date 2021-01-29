import "../css/alertCss.css";
function MyAlert({ text, className }) {
  return (
    <div className={className}>
      <h1 className="text-lg text-white">{text}</h1>
    </div>
  );
}

export default MyAlert;
