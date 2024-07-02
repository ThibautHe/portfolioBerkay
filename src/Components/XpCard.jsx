import { motion } from "framer-motion";

export default function XpCard({
  index,
  url,
  title,
  imgsize,
  active,
  extraMargin,
}) {
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 * index,
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 1.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        className="xp-card"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          variants={item}
          style={{ height: "150px", alignContent: "center" }}
        >
          <img
            style={{ width: imgsize, margin: extraMargin }}
            src={url}
            alt=""
          />
        </motion.div>

        <motion.div className="xp-slider" variants={item}>
          <div className={`xp-slider-line`}></div>
          <div
            style={{ left: "50%", top: "0" }}
            className={`xp-slider-ball`}
          ></div>
          <div
            style={{ left: "50%", top: "0" }}
            className={`xp-slider-ball-outline`}
          ></div>
        </motion.div>

        <motion.div
          style={{ height: "50px", width: "250px", textAlign: "center" }}
          variants={item}
        >
          <h1>{title}</h1>
          {active && (
            <h2 style={{ fontSize: "1em", textAlign: "center" }}>
              {" "}
              &#40; currently working &#41;
            </h2>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
