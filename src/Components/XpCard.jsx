export default function XpCard({ url, title, imgsize, active, extraMargin }) {
  const style = imgsize ? imgsize : "";

  return (
    <>
      <div className="xp-card">
        <div style={{ height: "150px", alignContent: "center" }}>
          <img
            style={{ width: imgsize, margin: extraMargin }}
            src={url}
            alt=""
          />
        </div>

        <div className="xp-slider">
          <div className={`xp-slider-line`}></div>
          <div
            style={{ left: "50%", top: "0" }}
            className={`xp-slider-ball`}
          ></div>
          <div
            style={{ left: "50%", top: "0" }}
            className={`xp-slider-ball-outline`}
          ></div>
        </div>

        <div style={{ height: "50px", width: "250px", textAlign: "center" }}>
          <h1>{title}</h1>
          {active && (
            <h2 style={{ fontSize: "1em", textAlign: "center" }}>
              {" "}
              &#40; currently working &#41;
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
