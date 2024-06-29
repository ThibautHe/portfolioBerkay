import { NavLink } from "react-router-dom";
import navCSS from "./CSS/nav.module.css";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";
import "./CSS/nav.css";
import { ExtraItem } from "./Components/ExtraItem.jsx";
import { motion } from "framer-motion";
import "./CSS/Extra.css";
import { useEffect } from "react";
import { Footer } from "./Footer.jsx";

export function ExtraPage() {
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
      <section className="ExtraSection">
        <div className="extra-content">
          <ExtraItem
            className="extra-item"
            video={
              <video
                playsInline
                controls
                poster="/images/tuto.png"
                className="video"
                style={{ width: "100%" }}
                src="https://d1iu13wka1lg1b.cloudfront.net/Parallax.mp4"
              ></video>
            }
          />
          <ExtraItem
            video={
              <video
                playsInline
                poster="/images/weaponholo.png"
                className="video"
                style={{ width: "100%" }}
              >
                <source
                  src="https://d1iu13wka1lg1b.cloudfront.net/WeaponHologram.mp4"
                  type="video/mp4"
                />
                cant load the video
              </video>
            }
          />
          <ExtraItem
            video={
              <video
                playsInline
                poster="/images/mysticorbe.png"
                className="video"
                style={{ width: "100%" }}
              >
                <source
                  src="https://d1iu13wka1lg1b.cloudfront.net/MysticOrb.mp4"
                  type="video/mp4"
                />
                cant load the video
              </video>
            }
          />
          <ExtraItem
            video={
              <video
                playsInline
                poster="/images/crypto.png"
                className="video"
                style={{ width: "100%" }}
              >
                <source
                  src="https://d1iu13wka1lg1b.cloudfront.net/Comp.mp4"
                  type="video/mp4"
                />
                cant load the video
              </video>
            }
          />
          <ExtraItem
            video={
              <video
                playsInline
                poster="/images/Kapena.png"
                className="video"
                style={{ width: "100%" }}
              >
                <source
                  src="https://d1iu13wka1lg1b.cloudfront.net/KAPAP.mp4"
                  type="video/mp4"
                />
                cant load the video
              </video>
            }
          />
          <ExtraItem
            video={
              <video
                playsInline
                poster="/images/proto2.png"
                className="video"
                style={{ width: "100%" }}
              >
                <source
                  src="https://d1iu13wka1lg1b.cloudfront.net/prototype2.mp4"
                  type="video/mp4"
                />
                cant load the video
              </video>
            }
          />
          <ExtraItem
            video={
              <video
                playsInline
                poster="/images/sussol.png"
                className="video"
                style={{ width: "100%" }}
              >
                <source
                  src="https://d1iu13wka1lg1b.cloudfront.net/sussol.mp4"
                  type="video/mp4"
                />
                cant load the video
              </video>
            }
          />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
