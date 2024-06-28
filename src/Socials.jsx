import SocialsCSS from "./CSS/Socials.module.css";
export function Socials({ SocialsList }) {
  return (
    <>
      <ul>
        {SocialsList.map((social) => {
          return (
            <li key={social}>
              <a className={SocialsCSS.link} href="">
                {social}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
