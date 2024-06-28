import { useNavigate, useParams } from "react-router-dom";
import "./CSS/PortfolioPages/singlepage.css";
import { useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import { Footer } from "./Footer.jsx";
import FontsCSS from "./CSS/fonts.module.css";
import loadcall, { applyOpacity } from "./ImgSlider.js";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedDiv } from "./Components/AnimatedDiv.jsx";
import useNextProject from "./Hooks/useNextProject.jsx";
import SoftwareCard from "./SoftwareCard.jsx";
import AeSvg from "./Components/Svg/AeSvg.jsx";
import PpSvg from "./Components/Svg/PpSvg.jsx";
import BlenderSvg from "./Components/Svg/BlenderSvg.jsx";
import ReactSvg from "./Components/Svg/ReactSvg.jsx";
import GithubSvg from "./Components/Svg/GithubSvg.jsx";
import CsharpSvg from "./Components/Svg/CsharpSvg.jsx";

export function SingleProject() {
  const { theme, readableColor } = useColorTheme();

  useEffect(() => {
    loadcall();
  }, []);

  const Softwares = {
    AE: {
      id: 1,
      logoSrc: <AeSvg />,
      softwareName: "After Effects",
      type: "svg",
    },
    PP: {
      id: 2,
      logoSrc: <PpSvg />,
      softwareName: "Premier Pro",
      type: "svg",
    },
    Blender: {
      id: 3,
      logoSrc: <BlenderSvg />,
      softwareName: "Blender",
      type: "svg",
    },
  };

  const Projects = [
    {
      id: 1,
      name: "Daydream",
      categorie: "motion",
      img: "https://d1iu13wka1lg1b.cloudfront.net/Daydream.mp4",
      showcaseImg: [],
      softwareUsed: [Softwares.AE, Softwares.PP, Softwares.Blender],
      description:
        "This is a website i made for a freelancer, he wanted to show pictures and also he wanted that people could send him a mail directly from the wesbite",
      probleme:
        "I wasnt familiar with how the mails worked, I found out I needed a domain which i never really work in depth with, So i figured how to work with custom domain.",
      solution:
        "I acquired the domain and made it so it had its own url name and also this made it so the mails could be sent from this url domain. Ultimately i'm happy with how it turned out and works now",
    },
    {
      id: 2,
      name: "Internship",
      categorie: "Presentation",
      img: "https://d1iu13wka1lg1b.cloudfront.net/Internship.mp4",
      showcaseImg: [],
      softwareUsed: [Softwares.AE, Softwares.PP],
      description:
        "The final test of my bachelor was an internship, where I got the opportunity to go work at fishing cactus, One of the biggest Gaming company in belgium. I was there as a Gameplay developper where I assisted the team in every part of the development, such as the meetings the development and their workflow. It was a very enriching experience. I'm very gratefull for this opportunity",
      probleme:
        "At Fishing I worked for a good month only on bugfixing to get the hang of it. I consistantly faced new and different bugs and for the first time I had to find my way through a codebase that I didnt wrote myself. Later I went on to develop my own upgrade systeme that would empower the player. It was also very enriching for me because I had to work in combination with code all over the codebase.",
      solution:
        "What I learned from this experience was that I had still alot to learn, and that things rarely goes as quickly as we would expect. I learned to work in a team and also to follow a workflow, on top of that I learned to use github more effectively. After my internship I immediatly made a list of some topics in which I had to improve.",
      link: "",
    },
    {
      id: 3,
      name: "Showreel",
      categorie: "Motion",
      img: "https://d1iu13wka1lg1b.cloudfront.net/ShowreelFiverr.mp4",
      showcaseImg: [],
      softwareUsed: [Softwares.AE, Softwares.PP],
      description:
        "This is the latest project I started, I wanted to challenge myself to learn now techs and with that going out of my comfort zone.",
      probleme:
        "making a website in React but this time by using TypeScript, I've been working alot with C# and I liked the way you had to define every type, That's why I felt attracted by Typescript. Secondly, I wanted to explore new features, I want to do it by implementing evey piece of other websites that I like.",
      solution:
        "I worked with Typescript inside the React framework. The project is still ongoing tho and I plan on updating the website every weekend, I want to add alot of interaction and animations. I would also want to create a CMS for this website. This would primarly be to train my backend skill which is currently not where I would like it to be.",
      link: "",
    },
  ];

  const { id } = useParams();
  const [project, setProject] = useState(
    Projects.find((p) => p.id === parseInt(id))
  );
  const [mainImg, setMainImg] = useState(project.img);
  const [secondaryImg, setSecondaryImg] = useState(project.showcaseImg);
  const { nextProject } = useNextProject(Projects, id);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the project based on the ID
    const foundProject = Projects.find((proj) => proj.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
      setMainImg(foundProject.img);
      setSecondaryImg(foundProject.showcaseImg);
    }
  }, [id]);

  useEffect(() => {
    // Apply opacity effect when secondary images change
    applyOpacity();
  }, [secondaryImg]);

  const handleImgClicked = (clickedImg) => {
    setMainImg(clickedImg);
    setSecondaryImg((prevImages) => {
      // Remove clickedImg from secondary images
      const updatedSecondary = prevImages.filter((img) => img !== clickedImg);
      // Add the current mainImg to secondary images
      updatedSecondary.unshift(mainImg);
      return updatedSecondary;
    });
  };

  const handleNextProjectClicked = () => {
    if (nextProject) {
      navigate(`/portfolio/${nextProject.id}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div
        draggable="false"
        className="content-container"
        style={{ backgroundColor: theme }}
      >
        <div className="project-title">
          <h2
            className={`project-title-category-name ${FontsCSS.regularOblique}`}
          >
            {project.categorie}
          </h2>
          <h1 className={`project-title-name ${FontsCSS.boldFont}`}>
            {project.name}
          </h1>
          {project.link ? (
            <a className="weblink" target="_blank" href={project.link}>
              Visit website
            </a>
          ) : (
            ""
          )}
        </div>
        <div className="project-images">
          <motion.div
            className="main-img"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.video
              className="video"
              key={mainImg}
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ ease: "easeIn", duration: 0.4 }}
              draggable="false"
              src={mainImg}
              alt=""
              autoPlay
              controls
            />
          </motion.div>
          <div className="img-slider-container">
            <motion.div
              whileInView={{ opacity: [0, 1], y: [-50, 0] }}
              transition={{ duration: 1 }}
              id="image-track"
              draggable="false"
              className="other-images"
              data-mouse-down-at="0"
              data-prev-percentage="0"
              data-percentage="0"
            >
              {secondaryImg.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    className="image"
                    key={img}
                    draggable="false"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleImgClicked(img);
                    }}
                    src={img}
                    alt=""
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <section className="project-about-container">
        <AnimatedDiv className="project-div project-about-title">
          <h1 className={`${FontsCSS.regular}`}>
            About the{" "}
            <span className={`${FontsCSS.yellow} ${FontsCSS.regularOblique}`}>
              project.
            </span>
          </h1>
        </AnimatedDiv>
        <div className="project-div project-description">
          <p style={{ color: { readableColor } }}>{project.description}</p>
        </div>
      </section>

      <div className="logosContainer" style={{ backgroundColor: theme }}>
        <AnimatedDiv className="softwares-logo" staggerchildrens={true}>
          {project.softwareUsed.map((software, index) => (
            <SoftwareCard
              key={software.id} // Add a unique key for each item in the array
              logoSrc={software.logoSrc}
              softwareName={software.softwareName}
              type={software.type}
              whileInView={{ y: [-50, 0] }}
              transition={{ delay: 0.2 + index * 0.1 }}
            />
          ))}
        </AnimatedDiv>
      </div>

      <section
        style={{ backgroundColor: theme }}
        className="project-problems-container"
      >
        <div className="project-problems">
          <h1>Problems I faced</h1>
          <p>
            {project.probleme}
            <br />
            <br />
            {project.solution}
          </p>
        </div>
      </section>

      <section className="nextProject">
        <video
          className=""
          src={nextProject.img}
          onClick={handleNextProjectClicked}
        ></video>
        <h1 className={`nextProjectTitle ${FontsCSS.boldFont}`}>
          NEXT PROJECT
        </h1>
      </section>
      <Footer />
    </>
  );
}
