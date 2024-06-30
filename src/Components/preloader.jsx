import { AnimatePresence, motion } from "framer-motion";
import { useColorTheme } from "../Hooks/useColorTheme";
import "../CSS/Preloader.css";

export default function Preloader() {
  const { readableColor, inverseReadableColor } = useColorTheme();

  return (
    <motion.div className="loader">
      <div></div>
      <div></div>
      <div className="circle">
        <div className="circle-center"></div>
      </div>
    </motion.div>
  );
}
