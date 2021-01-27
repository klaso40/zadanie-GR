import Donation from "../DonationComponent";
import MyInput from "../MyInput";
import SwitchHelp from "../SwitchHelpComponent";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { nextPart } from "../../store/actions";

function FirstPart() {
  const dispatch = useDispatch();
  const next = () => {
    dispatch(nextPart());
  };
  return (
    <div>
      <h1 className="text-headlineColor text-5xl font-bold my-7">
        Vyberte si možnosť, ako <br /> chcete pomôcť
      </h1>
      <SwitchHelp />
      <div className="mt-14">
        <div className="flex flex-row justify-between">
          <h3 className="text-headlineColor font-bold">
            Najviac mi záleží na útulku
          </h3>
          <aside className="text-subHeadlineColor font-bold">Nepovinné</aside>
        </div>
        <MyInput title="Meno" placeholder="Zadajte Vaše meno" />
        <Donation />
      </div>
      <div className={"flex flex-row justify-end mt-16 mb-5"}>
        <ButtonComponent
          text="Pokračovať"
          disabled={false}
          onButtonClick={() => next()}
        />
      </div>
    </div>
  );
}

export default FirstPart;
