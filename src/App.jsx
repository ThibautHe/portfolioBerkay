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
import { motion } from "framer-motion";
import UnitySvg from "./Components/Svg/UnitySvg.jsx";
import ReactSvg from "./Components/Svg/ReactSvg.jsx";
import GithubSvg from "./Components/Svg/GithubSvg.jsx";
import CsharpSvg from "./Components/Svg/CsharpSvg.jsx";
import { ExtraPage } from "./ExtraPage.jsx";
import AeSvg from "./Components/Svg/AeSvg.jsx";
import PpSvg from "./Components/Svg/PpSvg.jsx";

const About = () => {
  const { theme, readableColor, color1, color2 } = useColorTheme();
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
              src="https://d1iu13wka1lg1b.cloudfront.net/InteractiveMotionVFX.mp4"
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
              Ever since I can remember I've been playing video games, It has
              always been a mystery to me on how they were made, untill I
              started to learn more about the dev behind. After which it was
              even MORE a mystery, a mystery that I would love to explore.
              That's also what I did. Along my exploration I went to a school
              where I discovered general coding but also last but not least, Web
              development, This is where my love for web dev started too. I'm
              still to this day fascinated by everything possible on the web and
              I would love to explore this field even more.
            </p>
          </div>
        </div>
      </div>

      <div className="education-container" style={{ backgroundColor: theme }}>
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
            <h2 className="education-school">erasmus hogeschool brussels</h2>
            <h3 className="education-direction">
              <span className="bold">multimedia</span> &{" "}
              <span className="bold"> creative technologies</span>
            </h3>
            <p className="education-description">
              During my bachelor I got the opportunity to discover not only the
              development but also the design part. The studies were a fine line
              of balance between design and development. I would lie if I said
              that I didn't have my preferences. Indeed I felt way more
              comfortable with development than design. But I'm thankfull to
              have at least some bases in design. Along the road we had the
              opportunity to chose a path. it wasnt possible to chose all of
              them so I chose the game development course along with the other
              courses where I could explore this mystery of how game were made
              that kept me awake at night since I was a kid.
              <br />
              <br />
              What I mostly learned during these studies is that I'm far from
              knowing everything there is to know. I learned to learn, and to
              keep learning every day, that's what they called "lifelong
              learning". It was very autonmous learnig which wasnt always easy
              but at least I know now that it is possible.
            </p>
            <img className="education-img" src="/ehb.png" alt="" />
          </div>
        </div>
      </div>

      <div
        className="softwares-container"
        style={{ backgroundColor: theme, color: readableColor }}
      >
        <div className="softwares-content">
          <h1>
            <span className="bold">softwares</span>
            <span className="light"> i use</span>
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
          {
            path: ":id",
            element: <SingleProject />,
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
