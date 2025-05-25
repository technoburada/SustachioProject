import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import default styles
import { HiMail, HiUser, HiLocationMarker, HiPhone, HiChat } from "react-icons/hi";
import "./Contact.css";

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on page load

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="contactpage-us">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Header Section */}
      <div className="reveal contactpage-header">
        <div className="contactpage-header-text"></div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Contact Details Section */}
      <div className="reveal contactpage-details">
        <div className="contact-box contactpageabout">
          <h3>About*</h3>
          <p>
            Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui.
          </p>
        </div>
        <div className="contact-box contactpagecontact">
          <h3>Contact*</h3>
          <p>
            Phone: {phoneNumber || "XXX-XXX-XXX"}
            <br />
            <br /> info@sustachio.com
            <br />
            <br /> Mon - Fri:
            <br /> 9:00 am - 5:00 pm
          </p>
        </div>
        <div className="contact-box contactpageaddress">
          <h3>Address*</h3>
          <p>
            89231,
            <br />
            HNU Founders Space,
            <br />
            John-F.-Kennedy 7,
            <br />
            Neu-Ulm | Germany
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Map and Contact Form Section */}
      <div className="contactpage-content">
        <div className="reveal contactpagemap-container">
          {/* Embed Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5300.061269703728!2d10.007133876939433!3d48.37914777127118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479966c37ae7c633%3A0x5098369c497bb5f7!2sJohn-F.-Kennedy-Stra%C3%9Fe%207%2C%2089231%20Neu-Ulm!5e0!3m2!1sen!2sde!4v1739734870473!5m2!1sen!2sde"
            width="100%"
            height="700"
            style={{ borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="reveal contactpage-form">
          <h2><i className="fas fa-handshake"></i> Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            {/* Subject */}
            <div className="input-with-icon">
              <HiChat size={20} />
              <input type="text" placeholder="Subject*" required />
            </div>

            {/* Name and Surname */}
            <div className="contactpageform-row">
              <div className="input-with-icon">
                <HiUser size={20} />
                <input type="text" placeholder="Name*" required />
              </div>
              <div className="input-with-icon">
                <HiUser size={20} />
                <input type="text" placeholder="Surname*" required />
              </div>
            </div>

            {/* Email Address */}
            <div className="input-with-icon">
              <HiMail size={20} />
              <input type="email" placeholder="Email Address*" required />
            </div>

            {/* Address */}
            <div className="input-with-icon">
              <HiLocationMarker size={20} />
              <input type="text" placeholder="Address*" required />
            </div>

            {/* Phone Number */}
            <div className="input-with-icon" style={{width:"600px"}}>
              <HiPhone size={20} />
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={setPhoneNumber}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  placeholder:"Phone Number"
                }}
                containerStyle={{
                  marginTop: "10px",
                }}
                inputStyle={{
                  width: "100%",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  paddingLeft: "40px",
                }}
                buttonStyle={{
                  border: "none",
                  borderRadius: "4px 0 0 4px",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>
            <br></br>

            {/* Message */}
            <div className="input-with-icon">
              <HiChat size={20} />
              <textarea placeholder="Write a Message*" required></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit">
              Send a Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Contact;