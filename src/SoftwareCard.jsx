// import React, { useRef } from "react";

// const SoftwareCard = ({ logoSrc, softwareName }) => {
//   const logoTextRef = useRef(null);
//   const logoRef = useRef(null);

//   const handleHover = () => {
//     const logo = logoRef.current;
//     const logotext = logoTextRef.current;
//     logotext.style.display = "block";

//     if (logo) {
//       logo.setAttribute("closing", "");
//       logotext.setAttribute("opening", "");

//       logo.addEventListener(
//         "animationend",
//         () => {
//           logo.removeAttribute("closing");
//           logo.style.display = "none";
//         },
//         { once: true }
//       );
//       logotext.addEventListener(
//         "animationend",
//         () => {
//           logotext.style.display = "block";
//           logotext.removeAttribute("opening");
//         },
//         { once: true }
//       );
//     }
//   };

//   const handleMouseLeave = () => {
//     const logo = logoRef.current;
//     const logotext = logoTextRef.current;
//     logo.style.display = "block";

//     if (logotext) {
//       logo.setAttribute("opening", "");
//       logotext.setAttribute("closing", "");

//       logotext.addEventListener(
//         "animationend",
//         () => {
//           logotext.removeAttribute("closing");
//           logotext.style.display = "none";
//         },
//         { once: true }
//       );
//       logo.addEventListener(
//         "animationend",
//         () => {
//           logo.style.display = "block";
//           logo.removeAttribute("opening");
//         },
//         { once: true }
//       );
//     }
//   };

//   return (
//     <div
//       onMouseEnter={handleHover}
//       onMouseLeave={handleMouseLeave}
//       className="software-card-container"
//     >
//       <div className="software-card-content">
//         <div ref={logoRef} className="software-card-logo">
//           <img src={logoSrc} alt="" style={{ width: "64px" }} />
//         </div>
//         <div ref={logoTextRef} className="software-card-text">
//           <h1>{softwareName}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SoftwareCard;
import React, { forwardRef, useState } from "react";
import shortid from "shortid";
import { motion } from "framer-motion";
import { useColorTheme } from "./Hooks/useColorTheme";


// eslint-disable-next-line react/display-name
const mSoftwareCard = forwardRef(({ logoSrc, softwareName, type }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className="software-card-container"
    >
      <div key={getRandomKey} className="software-card-content">
        {isHovered ? (
          <TextCard softwareName={softwareName}></TextCard>
        ) : (
          <LogoCard logosrc={logoSrc} type={type}></LogoCard>
        )}
      </div>
    </div>
  );
});

const TextCard = ({ softwareName }) => (
  <div className="software-card-text">
    <h1>{softwareName}</h1>
  </div>
);
const LogoCard = ({ logosrc, type }) => {
  const { readableColor, inverseReadableColor } = useColorTheme();
  return (
    <div
      key={getRandomKey}
      className="software-card-logo"
      style={{
        width: "64px",
        fill: inverseReadableColor,
      }}
    >
      {type == "svg" ? (
        logosrc
      ) : (
        <img src={logosrc} alt="" style={{ width: "64px" }} />
      )}
    </div>
  );
};

const getRandomKey = () => {
  return shortid.generate();
};

const SoftwareCard = motion(mSoftwareCard);
export default SoftwareCard;
//export default SoftwareCard;
