function SummaryRow({ label, text }) {
  return (
    <div className="mb-5">
      <label className="text-subHeadlineColor font-bold">{label}</label>
      <p className="text-subHeadlineColor">{text}</p>
    </div>
  );
}

export default SummaryRow;
