import logo from "../assets/logo.png";
function MyFooter() {
  return (
    <footer className="container mx-auto py-28 mt-32 flex justify-between border border-b-0 border-r-0 border-l-0 border-t-2 border-borderColor">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h3 className="text-subHeadlineColor text-base font-bold">
          Nadácia Good Boy
        </h3>
        <ul className="text-gray-500">
          <li>O projekte</li>
          <li>Ako na to</li>
          <li>Kontakt</li>
        </ul>
      </div>
      <div className="w-40">
        <h3 className="text-subHeadlineColor text-base font-bold">
          Nadácia Good Boy
        </h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.
        </p>
      </div>
      <div className="w-40">
        <h3 className="text-subHeadlineColor text-base font-bold">
          Nadácia Good Boy
        </h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.
        </p>
      </div>
    </footer>
  );
}

export default MyFooter;
