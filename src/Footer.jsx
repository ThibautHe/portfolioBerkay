import { useColorTheme } from "./Hooks/useColorTheme";

export function Footer() {
  const { color1, color2 } = useColorTheme();

  return (
    <>
      <div className="main-footer">
        <h1>
          GET IN{" "}
          <span className="bold" style={{ color: `rgb(${color2.join(",")})` }}>
            TOUCH.
          </span>
        </h1>
        <p className="main-footer-description">
          A project together? Make sure to contact me via mail or linkedin
        </p>
        <ul>
          <li>
            <a href="mailto:berkayerdemir@gmail.com">email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/berkayerdemir/"
              target="_blank"
            >
              linkedin
            </a>
          </li>
        </ul>
        <div className="footer-line"></div>
        <p className="main-footer-close">
          Copyright 2024 Berkay Erdemir, All Rights Reserved
        </p>
      </div>
    </>
  );
}
