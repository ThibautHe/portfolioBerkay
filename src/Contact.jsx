import React from "react";
import { Footer } from "./Footer.jsx";
import { Header } from "./Header.jsx";
import "./CSS/contact.css";
import { useState } from "react";
import { useColorTheme } from "./Hooks/useColorTheme.jsx";

export function Contact() {
  const { theme } = useColorTheme();

  //CHAMP CONTROLER
  // const [formData, setFormData] = useState({
  //   name: "",
  //   description: "",
  //   email: "",
  // });

  const [submitColor, setSubmitColor] = useState(theme);

  // Handle input CHAMP CONTROLER

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission with formData
    console.log("Form submitted:", new FormData(e.target));
    alert("form has been submitted");
  };

  return (
    <>
      <div className="contact-container" style={{ backgroundColor: theme }}>
        <div className="contact-content">
          <div className="contact-img">
            <div className="cimg">
              <img src="../images/berkayshowreelimg.png" alt="" />
              <div className="contact-info">
                <h1>Berkay erdemir</h1>
                <h1>0494 80 80 80</h1>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="name-input-div">
                <label htmlFor="">Name</label>
                <input
                  className="name-input"
                  style={{ backgroundColor: theme }}
                  type="text"
                  name="name"
                  defaultValue={"your name ..."}
                />
              </div>
              <div className="name-input-div">
                <label htmlFor="">email</label>
                <input
                  className="name-input"
                  style={{ backgroundColor: theme }}
                  type="text"
                  name="email"
                  defaultValue={"youremail@hotmail.com"}
                />
              </div>

              <label htmlFor="">Message</label>
              <textarea
                style={{
                  backgroundColor: theme,
                  borderColor: "black",
                  width: "50%",
                }}
                rows="5"
                cols="33"
                name="message"
                placeholder="This is the default comment..."
              ></textarea>
              <input
                className="submit-btn"
                type="submit"
                value="Send"
                onSubmit={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
