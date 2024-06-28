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
      img: "/images/daydream.png",
      video:
        "https://drive.google.com/file/d/1ZW5nrSNMbS0ANDB1-rAEYWLPIZiPD1QL/preview",
      //video: "https://d1iu13wka1lg1b.cloudfront.net/Daydream.mp4",
      description: "this is a placeholder description",
      isVideo: true,
    },
    {
      id: 2,
      name: "Internship",
      img: "/images/stage.png",
      video:
        "https://drive.google.com/file/d/1GtOR703XOe18L1UYZGsiX81z5bWSjb8F/preview",
      //video: "https://d1iu13wka1lg1b.cloudfront.net/Internship.mp4",
      description: "this is a placeholder description",
      isVideo: true,
    },
    {
      id: 3,
      name: "showreel",
      img: "/images/fiverr.png",
      video:
        "https://drive.google.com/file/d/1ZUznQJoNxFV9VqZLC27leuJZ3X7PW3Ux/preview",
      //video: "https://d1iu13wka1lg1b.cloudfront.net/ShowreelFiverr.mp4",
      description: "this is a placeholder description",
      isVideo: false,
    },
  ];

  useEffect(() => {
    const videos = document.querySelectorAll(".video");

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
                      // <div className="pf-images video">
                      //   <iframe
                      //     style={{ position: "absolute", top: "0", left: "0" }}
                      //     width={"100%"}
                      //     height={"100%"}
                      //     src={project.video}
                      //     frameborder="0"
                      //   ></iframe>
                      // </div>

                      <div className="pf-images">
                        <motion.video
                          playsInline
                          muted
                          poster={project.img}
                          className=" video"
                        >
                          <source src={project.video} type="video/mp4" />
                        </motion.video>
                      </div>
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
