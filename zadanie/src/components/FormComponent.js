import FirstPart from "./form-parts/FirstPart";
import SecondPart from "./form-parts/SecondPart";
import ButtonComponent from "./ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { nextPart, previousPart } from "../store/actions";

function FormComponent() {
  const formIndex = useSelector((state) => state.formIndex);
  const dispatch = useDispatch();
  let formPart;
  if (formIndex === 1) {
    formPart = <FirstPart />;
  } else if (formIndex === 2) {
    formPart = <SecondPart />;
  }
  function previous() {
    dispatch(previousPart());
  }
  function next() {
    dispatch(nextPart());
  }
  return (
    <div>
      {formPart}
      <div className="flex flex-row justify-between mt-16 mb-5">
        <ButtonComponent text="Späť" onButtonClick={previous} />
        <ButtonComponent
          text="Pokračovať"
          disabled={false}
          onButtonClick={next}
        />
      </div>
    </div>
  );
}

export default FormComponent;
