import FirstPart from "./form-parts/FirstPart";
import SecondPart from "./form-parts/SecondPart";
import ThirdPart from "./form-parts/ThirdPart";
import ButtonComponent from "./ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { nextPart, previousPart } from "../store/actions";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../css/animations.css";

function FormComponent() {
  const formIndex = useSelector((state) => state.formIndex);
  const dispatch = useDispatch();
  let formPart;
  if (formIndex === 1) {
    formPart = <FirstPart />;
  } else if (formIndex === 2) {
    formPart = <SecondPart />;
  } else {
    formPart = <ThirdPart />;
  }
  function previous() {
    dispatch(previousPart());
  }
  function next() {
    dispatch(nextPart());
  }
  return (
    <div>
      <SwitchTransition className="h-1/2">
        <CSSTransition key={formIndex} classNames="fade" timeout={300}>
          {formPart}
        </CSSTransition>
      </SwitchTransition>
      <div
        className={
          formIndex === 1
            ? "flex flex-row justify-end mt-16 mb-5"
            : "flex flex-row justify-between mt-16 mb-5"
        }
      >
        <div className={formIndex === 1 ? "hidden" : ""}>
          <ButtonComponent text="Späť" onButtonClick={previous} />
        </div>

        <ButtonComponent
          text={formIndex === 3 ? "Odoslať formulár" : "Pokračovať"}
          disabled={false}
          onButtonClick={next}
        />
      </div>
    </div>
  );
}

export default FormComponent;
