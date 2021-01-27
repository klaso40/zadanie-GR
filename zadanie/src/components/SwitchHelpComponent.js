import { useSelector, useDispatch } from "react-redux";
import { setShelterHelp, setFoundationHelp } from "../store/actions";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import WalletImage from "../assets/WallteImage";
function SwitchHelp() {
  const helpState = useSelector((state) => state.help);
  const dispatch = useDispatch();
  const selectorRef = useRef(null);

  useEffect(() => {
    // Switch animation
    if (helpState === 0) {
      gsap.to(selectorRef.current, {
        duration: 0.3,
        left: 0,
        ease: "easeInOutCirc",
        borderTopLeftRadius: 0.75 + "rem",
        borderBottomLeftRadius: 0.75 + "rem",
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      });
    } else {
      gsap.to(selectorRef.current, {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0.75 + "rem",
        borderBottomRightRadius: 0.75 + "rem",
        duration: 0.3,
        left: selectorRef.current.clientWidth,
        ease: "easeInOutCirc",
      });
    }
  }, [helpState]);
  return (
    <div className="h-44 border  border-primaryColor flex rounded-xl relative hover: cursor-pointer ">
      <div className="w-1/2 p-6" onClick={() => dispatch(setShelterHelp())}>
        <div className={helpState === 0 ? "text-white" : "text-labelTextColor"}>
          <WalletImage />
          <h2>Chcem finančne prispieť konkrétnemu útulku</h2>
        </div>
      </div>
      <div className="w-1/2 p-6" onClick={() => dispatch(setFoundationHelp())}>
        <div className={helpState === 1 ? "text-white" : "text-labelTextColor"}>
          <WalletImage />
          <h2>Chcem finančne prispieť celej nadácii</h2>
        </div>
      </div>
      <div
        ref={selectorRef}
        className="w-1/2 h-full bg-gradient-to-br from-primaryColor to-secondaryColor rounded-r-xl absolute -z-10"
      ></div>
    </div>
  );
}

export default SwitchHelp;
