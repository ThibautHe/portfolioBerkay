import { NavLink } from "react-router-dom";
import navCSS from "./CSS/nav.module.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/nav.css";

export function Nav() {
  return (
    <>
      <ul className="mainheader-ul hovermenu">
        <li key={"Home"}>
          <NavLink
            to="/Home"
            className={`${navCSS.link}`}
            data-hover={"Home"}
            href=""
          >
            <span>Home</span>
          </NavLink>
        </li>

        <li key={"Portfolio"}>
          <NavLink
            to="/Portfolio"
            className={`${navCSS.link} PortfolioMenu`}
            data-hover={"Portfolio"}
            href=""
          >
            Portfolio
            <div className="portfolioDropdown">
              <NavLink className={"pflink"} to="/extra">Extra</NavLink>
            </div>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
