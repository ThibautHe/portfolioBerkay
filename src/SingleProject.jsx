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
        "Starting a VFX project can be complicated and very time-consuming. It takes a lot of preparation work to determine everything in advance. Throughout my research I learned how I had to work with Blender. I did a lot of research before I started filming with my camera. I didn't know that Blender had a good tracking system and this made it better for me since I was also going to use a 3D object. Blender is also free so for the For people looking for a free program to track, Blender is perfect.",
      probleme:
        "Making a VFX video was very interesting. I have never done this before and always wanted to try it. But the workflow was bit confusing. I didn't really know how to start and which programs I should use. I kind of regret my sword scene. I would have liked to keep it longer, but since Blender rendered at highest quality in 5 seconds in 12 hours, I chose to keep it short. Rendering several images with tracking points would take me weeks to render in total. So I did several things during the period of my research to create a successful tracking and rendering.",
      solution: "",
    },
    {
      id: 2,
      name: "Internship",
      categorie: "Presentation",
      img: "https://d1iu13wka1lg1b.cloudfront.net/Internship.mp4",
      showcaseImg: [],
      softwareUsed: [Softwares.AE, Softwares.PP],
      description:
        "To answer the research question “What is the ideal workflow to create realistic 3D tracking and rendering?” To answer: it is important that you do a little research in advance about certain software such as Blender or Cinema 4D. These two softwares are very good for 3D tracking. But if the new VFX compositors have a low budget they can use Blender for free. Before you start a project, it is certainly important to write a script. Hereby It is also important if you are going to film something that you create storyboards for a clearer image and that you write down the settings of your camera somewhere because this will be important in Blender.",
      probleme:
        "If object tracking needs to be done, it is important that you provide a prop or tracking points on an object as you will track this later on a 3D software. In my case I created a tracking stick as a tracking object. In addition, you can use blender or the chosen tracking software to do your tracking. Once that is done you can render your object as a png sequence and import to After Effects. And finally you can do the compositing on After effects in which you will mask, color grade and add effects if necessary.",
      solution: "",
      link: "",
    },
    {
      id: 3,
      name: "Showreel",
      categorie: "VFX",
      img: "https://d1iu13wka1lg1b.cloudfront.net/InteractiveMotionVFX.mp4",
      showcaseImg: [],
      softwareUsed: [Softwares.AE, Softwares.PP],
      description:
        "If object tracking needs to be done, it is important that you provide a prop or tracking points on an object as you will track this later on a 3D software. In my case I created a tracking stick as a tracking object. In addition, you can use blender or the chosen tracking software to do your tracking. Once that is done you can render your object as a png sequence and import to After Effects. And finally you can do the compositing on After effects in which you will mask, color grade and add effects if necessary.",
      probleme:
        "Firstly, achieving precise camera tracking is often difficult due to the limitations of the iPhone’s sensors and the need for steady, consistent movements. Lighting variations can also pose problems, as changes in ambient light can affect the tracking markers' visibility and consistency. The iPhone’s relatively small screen and limited processing power compared to professional equipment make real-time adjustments and rendering slower and less accurate. Furthermore, integrating the VFX elements seamlessly into the live footage requires meticulous attention to detail to ensure that shadows, reflections, and movements match perfectly. Post-production can be labor-intensive, as fine-tuning the alignment and blending the VFX with the original video to make it appear realistic demands significant time and expertise.",
      solution: "",
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
