import React from "react";
import Turkey from "../assets/Turkey.jpg";
import "../styles/Contact.css";

function Contact() {
  // const handleSubmit = (event) => {
  //   console.log(event);
  // };
  return (
    <div className="contact">
      <div
        className="rightSide"
        style={{ backgroundImage: `url(${Turkey})` }}
      ></div>
      <div className="leftSide">
        <h1>Contuct Us</h1>vd.5
        <form
          id="contact"
          method="POST"
          // onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="names">Add Name</label>
          <input name="name" placeholder="enter your name" type="text" />
          <label htmlFor="email">Add Email</label>
          <input name="email" placeholder="enter your email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="add your text"
            required
            rows="4"
            name="message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
