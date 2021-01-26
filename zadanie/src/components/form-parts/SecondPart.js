import MyInput from "../MyInput";
import { useDispatch } from "react-redux";
import {
  setEmail,
  setLastName,
  setName,
  setPhoneNumber,
} from "../../store/actions";
function SecondPart() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-headlineColor text-5xl font-bold my-7">
        Potrebujeme od Vás <br /> zopár informácií
      </h1>
      <h2 className="text-subHeadlineColor font-bold text-sm mt-11">O vás</h2>
      <MyInput
        title="Meno"
        placeholder="Zadajte Vaše meno"
        onChange={(value) => dispatch(setName(value))}
      />
      <MyInput
        title="Priezvisko"
        placeholder="Zadajte Vaše priezvisko"
        onChange={(value) => dispatch(setLastName(value))}
      />
      <MyInput
        title="E-mailová adresa"
        placeholder="Zadajte Váš e-mail"
        onChange={(value) => dispatch(setEmail(value))}
      />
      <MyInput
        title="Telefónne číslo"
        placeholder="🇸🇰 +421"
        onChange={(value) => dispatch(setPhoneNumber(value))}
      />
    </div>
  );
}

export default SecondPart;
