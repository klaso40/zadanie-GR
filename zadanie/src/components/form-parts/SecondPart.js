import MyInput from "../MyInput";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setLastName,
  setName,
  setPhoneNumber,
} from "../../store/actions";
function SecondPart() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const lastName = useSelector((state) => state.lastName);
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const email = useSelector((state) => state.email);
  return (
    <div>
      <h1 className="text-headlineColor text-5xl font-bold my-7">
        Potrebujeme od Vás <br /> zopár informácií
      </h1>
      <h2 className="text-subHeadlineColor font-bold text-sm mt-11">O vás</h2>
      <MyInput
        title="Meno"
        value={name}
        placeholder="Zadajte Vaše meno"
        onChange={(value) => dispatch(setName(value))}
      />
      <MyInput
        title="Priezvisko"
        value={lastName}
        placeholder="Zadajte Vaše priezvisko"
        onChange={(value) => dispatch(setLastName(value))}
      />
      <MyInput
        title="E-mailová adresa"
        value={email}
        placeholder="Zadajte Váš e-mail"
        onChange={(value) => dispatch(setEmail(value))}
      />
      <MyInput
        title="Telefónne číslo"
        value={phoneNumber}
        placeholder="🇸🇰 +421"
        onChange={(value) => dispatch(setPhoneNumber(value))}
      />
    </div>
  );
}

export default SecondPart;
