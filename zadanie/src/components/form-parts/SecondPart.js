import MyInput from "../MyInput";
function SecondPart() {
  return (
    <div>
      <h1 className="text-headlineColor text-5xl font-bold my-7">
        Potrebujeme od Vás <br /> zopár informácií
      </h1>
      <h2 className="text-subHeadlineColor font-bold text-sm mt-11">O vás</h2>
      <MyInput title="Meno" placeholder="Zadajte Vaše meno" />
      <MyInput title="Priezvisko" placeholder="Zadajte Vaše priezvisko" />
      <MyInput title="E-mailová adresa" placeholder="Zadajte Váš e-mail" />
      <MyInput title="Telefónne číslo" placeholder="🇸🇰 +421" />
    </div>
  );
}

export default SecondPart;
