import React, { useEffect, useState } from "react";
import { Logo } from "./Logo.jsx";
import { Nav } from "./Nav.jsx";
import { Socials } from "./Socials.jsx";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { NavLink, Outlet } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu.jsx";
import { AnimatePresence, easeIn, motion } from "framer-motion";
import Preloader from "./Components/preloader.jsx";

export function Header() {
  const navItems = ["Home", "Portfolio"];
  const socials = ["insta", "fb", "linkdn"];
  const { theme, readableColor } = useColorTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <>
      <div>
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="preloader"
              initial={{ y: "0" }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 1, ease: easeIn }}
              style={{ position: "fixed", zIndex: 100 }}
            >
              <Preloader />
            </motion.div>
          ) : (
            <div>
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
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
