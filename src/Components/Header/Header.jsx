import React from "react";
import s from "./Header.module.css";

const Header = (props) => {
  return (
      <header className={s.header}>
        <img src="https://www.twilio.com/marketing/bundles/company-brand/img/logos/red/twilio-logo-red.png" />
      </header>
  );
};
export default Header;
