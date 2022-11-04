import React from "react";
import "./styles/form.css";

const Form = () => {
  return (
    <form className="container__form" name="contact" method="post">
      <h3>Contactame</h3>
      <input type="hidden" name="form-name" value="contact" />
      <p className="form__div">
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p className="form__div">
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p className="form__div">
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input
          className="flowrino-btn btn"
          type="submit"
          value="Submit message"
        />
      </p>
    </form>
  );
};

export default Form;
