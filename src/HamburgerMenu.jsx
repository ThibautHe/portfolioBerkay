import { useContext, useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/HamburgerMenu.css";
import { NavLink } from "react-router-dom";

export function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);
  const { theme, readableColor, color1, color2 } = useColorTheme();

  const handleOnClick = (e) => {
    setIsActive(() => !isActive);
  };
  return (
    <>
      <div
        className={`menu ${isActive ? "menu-active" : ""}`}
        onClick={handleOnClick}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={` menu-container ${isActive ? "menu-container-active" : ""}`}
      >
        <div
          className={` menu-content ${isActive ? "menu-content-active" : ""}`}
          style={{ backgroundColor: readableColor }}
        >
          <ul className="menu-content-ul">
            <li>
              <NavLink
                to={"/Home"}
                onClick={() => setIsActive(false)}
                className="menu-navlink"
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Portfolio"}
                onClick={() => setIsActive(false)}
                className="menu-navlink"
              >
                portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
