import FontsCSS from "../CSS/fonts.module.css";
import XpCard from "./XpCard";
import { motion } from "framer-motion";

export default function Experience() {
  const container = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.5 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <div className="xp-content-container">
      <div className="xp-container">
        <div className="xp-title-div">
          <h1 className="xp-title">Experience </h1>
          <span className="education-line"></span>
        </div>
      </div>
      <div className="xp-content">
        <h2>
          <div className="xp-ball">
            <div style={{ left: "-5%" }} className={`xp-slider-ball`}></div>
            <div
              style={{ left: "-5%" }}
              className={`xp-slider-ball-outline`}
            ></div>
          </div>
          <span className={FontsCSS.boldOblique}>multimedia</span> &
          <span className={FontsCSS.boldOblique}> creative technologies</span>
        </h2>
      </div>
      <p className="xp-text">
        I pursued my studies in Multimedia and Communication Technologies at
        Erasmus Hogeschool Brussel, where I gained a comprehensive education
        that encompassed various facets of digital media. The curriculum
        included web design and programming, which equipped me with the skills
        to create responsive and visually appealing websites using HTML, CSS,
        and JavaScript. Working in big groups was a significant part of the
        program, fostering collaboration and project management skills essential
        for real-world applications. My passion for visual storytelling was
        nurtured through extensive training in video editing and motion
        graphics, where I learned to use industry-standard software like Adobe
        Premiere Pro and After Effects. This diverse educational experience not
        only broadened my technical abilities but also enhanced my creative
        thinking and problem-solving skills, preparing me for a dynamic career
        in the multimedia and communication technology fields.
      </p>

      <div
        className="xp-card-container"
      >
        <XpCard
        index={1}
          imgsize="100px"
          title="Internship"
          url="/images/vc.jpg"
        ></XpCard>
        <XpCard index={2} title="Freelance" url="/images/fiverrlogo.png"></XpCard>
        <XpCard
        index={3}
          imgsize="200px"
          extraMargin={"20px 0 0 0"}
          active={true}
          title="Content Operator"
          url="/images/emg.png"
        ></XpCard>
      </div>
    </div>
  );
}
