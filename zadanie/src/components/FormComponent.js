import FirstPart from "./form-parts/FirstPart";
import SecondPart from "./form-parts/SecondPart";
import ThirdPart from "./form-parts/ThirdPart";

import { useSelector } from "react-redux";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../css/animations.css";

function FormComponent() {
  const formIndex = useSelector((state) => state.formIndex);
  let formPart;
  if (formIndex === 1) {
    formPart = <FirstPart />;
  } else if (formIndex === 2) {
    formPart = <SecondPart />;
  } else {
    formPart = <ThirdPart />;
  }

  return (
    <div>
      <SwitchTransition className="h-1/2">
        <CSSTransition key={formIndex} classNames="fade" timeout={300}>
          {formPart}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default FormComponent;
