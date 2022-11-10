import React from "react";
import "./styles/form.css";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <form className="container__form" name="contact" method="post">
      <h3>{t("form.titleForm")}</h3>
      <input type="hidden" name="form-name" value="contact" />
      <p className="form__div">
        <label htmlFor="name">{t("form.name")}</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p className="form__div">
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p className="form__div">
        <label htmlFor="message">{t("form.message")}</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <p>
        <input
          className="flowrino-btn btn"
          type="submit"
          value={t("form.button")}
        />
      </p>
    </form>
  );
};

export default Form;
