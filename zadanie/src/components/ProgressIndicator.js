import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import "../css/progressIndicator.css";
function ProgressIndicator() {
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const toLargeIndicator = (target) => {
    gsap.to(target, {
      width: 2.75 + "rem",
    });
  };
  const toSmallIndicator = (target) => {
    gsap.to(target, {
      width: 1.25 + "rem",
    });
  };
  const formIndex = useSelector((state) => state.formIndex);
  const prevIndex = usePrevious(formIndex);
  const firstElement = useRef(null);
  const secondElement = useRef(null);
  const thirdElement = useRef(null);

  useEffect(() => {
    if (prevIndex === 1) {
      toSmallIndicator(firstElement.current);
      toLargeIndicator(secondElement.current);
    } else if (
      (prevIndex === 2 && formIndex === 1) ||
      prevIndex === undefined
    ) {
      toSmallIndicator(secondElement.current);
      toLargeIndicator(firstElement.current);
    } else if (prevIndex === 2 && formIndex === 3) {
      toSmallIndicator(secondElement.current);
      toLargeIndicator(thirdElement.current);
    } else {
      toSmallIndicator(thirdElement.current);
      toLargeIndicator(secondElement.current);
    }
  });
  return (
    <div className="mt-20 flex flex-row">
      <div
        ref={firstElement}
        className={formIndex === 1 ? "active" : "unactive"}
      ></div>
      <div
        ref={secondElement}
        className={formIndex === 2 ? "active" : "unactive"}
      ></div>
      <div
        ref={thirdElement}
        className={formIndex === 3 ? "active" : "unactive"}
      ></div>
    </div>
  );
}

export default ProgressIndicator;
