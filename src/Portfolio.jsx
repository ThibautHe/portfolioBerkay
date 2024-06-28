import React, { useEffect } from "react";
import "./CSS/MainHeader.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { NavLink, Outlet } from "react-router-dom";
import "./CSS/PortfolioPages/portfolio.css";
import { Footer } from "./Footer.jsx";
import { motion } from "framer-motion";

export function Portfolio() {
  const { theme, readableColor } = useColorTheme();
  const Projects = [
    {
      id: 1,
      name: "Daydream",
      img: "",
      video: "https://d1iu13wka1lg1b.cloudfront.net/Daydream.mp4",
      description: "this is a placeholder description",
      isVideo: true,
    },
    {
      id: 2,
      name: "Internship",
      img: "",
      video: "https://d1iu13wka1lg1b.cloudfront.net/Internship.mp4",
      description: "this is a placeholder description",
      isVideo: true,
    },
    {
      id: 3,
      name: "showreel",
      img: "",
      video: "https://d1iu13wka1lg1b.cloudfront.net/ShowreelFiverr.mp4",
      description: "this is a placeholder description",
      isVideo: true,
    },
  ];

  useEffect(() => {
    const videos = document.querySelectorAll(".video");

    videos.src = videos.src; // hack for ios

    videos.forEach((video) => {
      video.addEventListener("mouseenter", () => {
        video.play();
      });

      video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }, []);

  return (
    <>
      <div className="pf-main-container" style={{ backgroundColor: theme }}>
        <h1 className="pf-main-title">
          Some of my <span className="bold">projects.</span>
        </h1>
        <div className="pf-main-content">
          <ul>
            {Projects.map((project, index) => (
              <>
                <li key={project.name}>
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to={`/portfolio/${project.id}`}
                  >
                    {project.isVideo ? (
                      <motion.video
                        playsInline
                        muted
                        className="pf-images video"
                      >
                        <source src={project.video} type="video/mp4" />
                      </motion.video>
                    ) : (
                      <img src={project.img} className="pf-images"></img>
                    )}
                  </NavLink>
                </li>
                {(index + 1) % 2 === 0 && (
                  <div
                    className="pf-hr grid-2-span-col"
                    style={{ width: "40%", height: "1px" }}
                  />
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
