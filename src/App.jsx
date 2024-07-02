// import "CSS/MainHeader.css";
import { useContext, useState, useRef, useEffect, forwardRef } from "react";
import { Nav } from "./Nav.jsx";
import { Slider } from "./Slider.jsx";
import { Header } from "./Header.jsx";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/MainStory.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Portfolio } from "./Portfolio.jsx";
import { Footer } from "./Footer.jsx";
import { Contact } from "./Contact.jsx";
import { SingleProject } from "./SingleProject.jsx";
import FontsCSS from "./CSS/fonts.module.css";
import SoftwareCard from "./SoftwareCard.jsx";
import { AnimatedDiv } from "./Components/AnimatedDiv.jsx";
import { AnimatePresence, motion } from "framer-motion";
import UnitySvg from "./Components/Svg/UnitySvg.jsx";
import ReactSvg from "./Components/Svg/ReactSvg.jsx";
import GithubSvg from "./Components/Svg/GithubSvg.jsx";
import CsharpSvg from "./Components/Svg/CsharpSvg.jsx";
import { ExtraPage } from "./ExtraPage.jsx";
import AeSvg from "./Components/Svg/AeSvg.jsx";
import PpSvg from "./Components/Svg/PpSvg.jsx";
import Preloader from "./Components/preloader.jsx";
import Experience from "./Components/Experience.jsx";

const About = () => {
  const { theme, readableColor, color1, color2 } = useColorTheme();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   });

  //   return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  // }, []);

  const softwareData = [
    {
      id: 1,
      logoSrc: <AeSvg />,
      softwareName: "After Effects",
      type: "svg",
    },
    {
      id: 2,
      logoSrc: <PpSvg />,
      softwareName: "Premier Pro",
      type: "svg",
    },
    // Add more software data as needed
  ];
  return (
    <div>
      <div
        className="MainContentContainer"
        style={{ backgroundColor: theme, color: readableColor }}
      >
        <div className="mainArticle">
          <h1 className="mainTitle">
            Berkay <span className="mainTitleSpan">Erdemir.</span>
          </h1>
          <p className="mainDescription">
            I am a passionate Motion Designer with a strong foundation in Adobe
            After Effects and Premiere Pro, backed by a diploma in Media Design
            and Communications from Erasmus Hogeschool. Majoring in Motion has
            equipped me with the skills and knowledge to bring dynamic and
            captivating visual stories to life. Throughout my academic and
            professional journey, I have honed my expertise in creating visually
            compelling motion graphics, engaging video content, seamless
            animations and resonate with audiences
          </p>
          <img
            className="profilepic"
            style={{
              position: "absolute",
              right: "0",
              bottom: "0",
              width: "70%",
            }}
            src="image00001.png"
            alt=""
          />
          <Slider isVertical={false} hasEffect={true} isRelative={true} />
        </div>
        {/* <Slider
          isVertical={true}
          hasEffect={false}
          offsetLeft={"80%"}
          isRelative={true}
          sliderHeight={"35%"}
          /> */}
      </div>

      <div
        className="main-story-container"
        style={{ color: `rgb(${color2.join(",")})` }}
      >
        <div className="main-story-article">
          <div className="main-story-video-div">
            <video
              className="main-video"
              loop
              autoPlay
              muted
              preload="auto"
              playsInline
              src="https://d1iu13wka1lg1b.cloudfront.net/ShowreelFiverr.mp4"
              alt=""
            />
          </div>
          <div className="main-story-content">
            <h1 className={`main-story-title ${FontsCSS.regular}`}>
              how I started to like <br />
              <span className={`${FontsCSS.yellow} ${FontsCSS.boldOblique}`}>
                Motion Graphics
              </span>{" "}
              and <span className={`${FontsCSS.boldOblique}`}>Vfx</span>
            </h1>
            <p className="main-story-description">
              I've always been fascinated by the magic of visual effects (VFX),
              captivated by the way they bring fantastical worlds and characters
              to life in movies and games. From a young age, I was enthralled by
              the stunning VFX I saw on screen, whether it was the intricate
              details in blockbuster films or the immersive environments in
              video games. This fascination spurred my curiosity about the VFX
              workflow and the intricate process of creating these visual
              masterpieces.
              <br />
              <br />
              Over time, I delved deeper into understanding the steps involved
              in VFX production, from concept development and storyboarding to
              3D modeling, texturing, and compositing. I was particularly
              intrigued by the combination of technical skills and artistic
              creativity required to make seamless and believable effects.
              During my studies and internships, I actively sought opportunities
              to learn and apply various VFX techniques, using industry-standard
              software like After Effects and Cinema 4D.
              <br />
              <br />
              My passion for VFX grew as I practiced and experimented,
              constantly inspired by the incredible work of VFX artists in the
              entertainment industry. The ability to transform imagination into
              reality through VFX continues to drive me, and I am eager to
              contribute to creating captivating visual experiences that leave
              audiences in awe.
            </p>
          </div>
        </div>
      </div>


      <Experience></Experience>

      {/* <div className="education-container" style={{ backgroundColor: theme }}>
        <Slider
          isVertical={true}
          offsetLeft={"50%"}
          isRelative={true}
          sliderHeight={"100px"}
          BallPos={100}
        />
        <h1 className="education-title" style={{ color: readableColor }}>
          my education
        </h1>
        <div className="education-line" />
        <div className="education-content-container">
          <div className="education-content">
            <h3 className="education-direction">
              <span className="bold">multimedia</span> &{" "}
              <span className="bold"> creative technologies</span>
            </h3>
            <p className="education-description">
              I pursued my studies in Multimedia and Communication Technologies
              at Erasmus Hogeschool Brussel, where I gained a comprehensive
              education that encompassed various facets of digital media. The
              curriculum included web design and programming, which equipped me
              with the skills to create responsive and visually appealing
              websites using HTML, CSS, and JavaScript. Working in big groups
              was a significant part of the program, fostering collaboration and
              project management skills essential for real-world applications.
              My passion for visual storytelling was nurtured through extensive
              training in video editing and motion graphics, where I learned to
              use industry-standard software like Adobe Premiere Pro and After
              Effects. This diverse educational experience not only broadened my
              technical abilities but also enhanced my creative thinking and
              problem-solving skills, preparing me for a dynamic career in the
              multimedia and communication technology fields.
            </p>
            <img className="education-img" src="/ehb.png" alt="" />
          </div>
        </div>
      </div> */}

      <div
        className="softwares-container"
        style={{ backgroundColor: theme, color: readableColor }}
      >
        <div className="softwares-content">
          <h1>
            <span className="bold">software</span>
            <span className="light"> I use</span>
          </h1>
          <div
            className="pf-hr grid-2-span-col"
            style={{ width: "40%", height: "1px" }}
          />
        </div>
        <AnimatedDiv className="softwares-logo" staggerchildrens={true}>
          {softwareData.map((software, index) => (
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
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "Home",
        element: <About />,
      },
      {
        path: "portfolio",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element: <Portfolio />,
          },
          {
            path: ":id",
            element: <SingleProject />,
          },
        ],
      },
      {
        path: "extra",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element: <ExtraPage />,
          },
        ],
      },
      {
        path: "contact",
        element: (
          <>
            <Outlet />
          </>
        ),
        children: [
          {
            path: "",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
