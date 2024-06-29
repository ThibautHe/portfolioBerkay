import React from "react";
import { Logo } from "./Logo.jsx";
import { Nav } from "./Nav.jsx";
import { Socials } from "./Socials.jsx";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { NavLink, Outlet } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu.jsx";

export function Header() {
  const navItems = ["Home", "Portfolio"];
  const socials = ["insta", "fb", "linkdn"];
  const { theme, readableColor } = useColorTheme();

  return (
    <>
      <div className="MainHeader" style={{ backgroundColor: theme }}>
        <NavLink to={"/"}>
          <div className="logo">
            <Logo />
          </div>
        </NavLink>

        <Nav />
        {/* <Socials SocialsList={socials} /> */}
        <HamburgerMenu />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}
