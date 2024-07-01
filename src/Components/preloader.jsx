import { AnimatePresence, easeIn, motion } from "framer-motion";
import { useColorTheme } from "../Hooks/useColorTheme";
import "../CSS/Preloader.css";

export default function Preloader() {
  const { readableColor, inverseReadableColor } = useColorTheme();

  return (
    <>
      {/* <div className="loader"></div> */}
      <div className="loader-content">
        <div className="line"></div>
        <div className="circle">
          <div className="circle-center"></div>
        </div>
      </div>
    </>
  );
}
