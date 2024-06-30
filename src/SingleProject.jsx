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
        "Starting a VFX project can be complicated and very time-consuming. It takes a lot of preparation work to determine everything in advance. Throughout my research I learned how I had to work with Blender. I did a lot of research before I started filming with my camera. I didn't know that Blender had a good tracking system and this made it better for me since I was also going to use a 3D object. Blender is also free so for the For people looking for a free program to track, Blender is perfect.\n Making a VFX video was very interesting. I have never done this before and always wanted to try it. But the workflow was bit confusing. I didn't really know how to start and which programs I should use. I kind of regret my sword scene. I would have liked to keep it longer, but since Blender rendered at highest quality in 5 seconds in 12 hours, I chose to keep it short. Rendering several images with tracking points would take me weeks to render in total. So I did several things during the period of my research to create a successful tracking and rendering.",
      probleme:
        "To answer the research question “What is the ideal workflow to create realistic 3D tracking and rendering?” To answer: it is important that you do a little research in advance about certain software such as Blender or Cinema 4D. These two softwares are very good for 3D tracking. But if the new VFX compositors have a low budget they can use Blender for free. Before you start a project, it is certainly important to write a script. Hereby It is also important if you are going to film something that you create storyboards for a clearer image and that you write down the settings of your camera somewhere because this will be important in Blender.\nIf object tracking needs to be done, it is important that you provide a prop or tracking points on an object as you will track this later on a 3D software. In my case I created a tracking stick as a tracking object. In addition, you can use blender or the chosen tracking software to do your tracking. Once that is done you can render your object as a png sequence and import to After Effects. And finally you can do the compositing on After effects in which you will mask, color grade and add effects if necessary.",
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
        "I began my internship at Videocrew in Antwerp with a keen interest in video editing and motion design, eager to apply and expand my skills in a professional setting. From the outset, I was integrated into the team and quickly immersed in various projects, ranging from promotional videos to complex animations. As a video editor, I honed my ability to piece together footage seamlessly, ensuring that each project met the high standards expected by our clients. Simultaneously, as a motion designer, I explored creative techniques to bring static visuals to life, learning to utilize tools like After Effects to create engaging animations. My responsibilities grew over time, and I collaborated closely with other team members, contributing to brainstorming sessions and executing ideas that enhanced our projects' overall impact. The hands-on experience at Videocrew not only improved my technical proficiency but also instilled a deeper understanding of the industry's workflow and client expectations.",
      probleme:
        "To conclude my internship report, I will summarize the key competencies I acquired. I will focus on the skills that showed a positive evolution and explain why they were beneficial. I have always been interested in learning new techniques to speed up my workflow. Therefore, completing tutorials and taking online courses during my internship was an educational process. I completed several tutorials that would be useful for After Effects projects. It was also an enjoyable process where the team learned new techniques with new assignments. I tried to learn as many different methods and techniques as possible during my internship. This competency definitely showed positive progress. \n For this second competency, I created numerous lists \n with resources and lists we could use for assignments. For example, I made a list of music (for all internship assignments) and templates that could be useful for specific tasks (Videocrew office manager, Tutters and Bellen). This was certainly a positive development throughout my internship, as I always did this while solving a problem or making lists. Moreover, I was experienced with the technologies used during my internship. Thus, it became easier to do certain things, such as changing the speed of an animation via keyframes. Due to my experience, they could assign me to client projects. This was an added value for me because it showed that they could trust me. The assignments themselves were client feedback that I had to process (see client assignments in the attachment). I also applied the new techniques I had learned to my tasks (Tangent, speed ramps, Dynamic link, multicam sequence, Lumetri colors, Stabilizer). This is how I acquired the competency Applying knowledge and theoretical insight. Besides cognitive competencies, I also gained many personal competencies. I showed good dedication and perseverance throughout my internship. The most fitting example I can give is the assignment I received from Belcanto – Our House. This assignment was a theater show I had to edit, which was 2 hours long with multiple camera shots. It was fascinating but educational because I learned new things such as Tangent, an external device that can adjust the color elements of the image. I had some difficulty meeting deadlines in the first few weeks because communication was reserved. This was purely because I saw myself as an intern and not a real employee. \n So, I was a bit unsure of what the team expected from me. This improved over time, and I also gained more trust from the team. They occasionally assigned me real projects. Additionally, there were deadlines that had to be respected. I met all deadlines on time, and the team found it valuable. I also dressed like the others and maintained a professional attitude. Besides all the social competencies, I was also flexible and could work in different environments. I sometimes had to change desks because some computers were slow. So, I was moved from Mac to Windows. I was flexible and experienced enough to work on both PCs. Sometimes my internship supervisor would come with an urgent task (Scheldt quays). So, I put my internal internship assignment on hold and could quickly start on what needed to be completed urgently. I had some problems taking the initiative. As I mentioned earlier, I felt uncomfortable and didn't know anyone in the office. So, the first few weeks were not very comfortable. Over the course of my internship, I got to know my colleagues and felt more at ease. Regarding organizational competencies, I learned how to plan and also understood the importance of logging your hours in a company. Videocrew does this based on Orbit. I learned how to use Orbit and the benefits of such a website. Additionally, a Google calendar had to be maintained with your entire weekly schedule so that colleagues could plan meetings when everyone was available. I did this (see calendar). \n I also ensured that my videos were edited professionally. I had to work for clients where my videos needed to be edited according to client feedback. I respected the feedback and delivered quality videos. It was also important to have a good work methodology. I learned their work method and applied it to all my tasks.\n For the last group of competencies, I acquired them all. As I mentioned earlier in this report, I was reserved in the first few weeks. Communication was not good initially. I barely spoke and didn't know anyone on the team, but over time, I got to know them and felt comfortable. I also worked with the team on certain tasks. I was allowed to participate in an assignment intended for clients. This was definitely a positive evolution, as in the first few weeks, I only had individual assignments and later could work with the team on other client projects.\n Hereby, I conclude my internship report. Hopefully, my report provides a good explanation of the competencies acquired and why certain things went well or poorly. Thanks to Videocrew for giving me the best three months. I learned a lot and will certainly never forget my internship.",
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
        "For this project, i decided to make a vfx tracking video with multiple screens next to it. In addition also adding vfx glitch effects and texts to finalize to product.",
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
            {project.probleme.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
                <br />
              </React.Fragment>
            ))}

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
