import React, { useEffect, useState } from "react";
import { Logo } from "./Logo.jsx";
import { Nav } from "./Nav.jsx";
import { Socials } from "./Socials.jsx";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { NavLink, Outlet } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu.jsx";
import {
  AnimatePresence,
  cubicBezier,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";
import Preloader from "./Components/preloader.jsx";

export function Header() {
  const navItems = ["Home", "Portfolio"];
  const socials = ["insta", "fb", "linkdn"];
  const { theme, readableColor } = useColorTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

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
              exit={{ y: "-100%" }}
              transition={{
                duration: 2,
                ease: cubicBezier(0, 1.18, 0.5, 0.96),
              }}
              style={{
                position: "fixed",
                zIndex: 100,
                overflow: "hidden",
                backgroundColor: readableColor,
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                key="preloader"
                initial={{ y: "0" }}
                exit={{ y: "100%" }}
                transition={{
                  duration: 2,
                  ease: cubicBezier(0, 1.18, 0.5, 0.96),
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <Preloader />
              </motion.div>
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
