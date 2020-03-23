import React from "react";
import s from "./Footer.module.css";

const Footer = () =>{
  return(
    <footer className={s.footer}>
      <p>site design / logo © 2020 Stack Exchange Inc; user contributions licensed under cc by-sa 4.0 with attribution required. rev 2020.3.20.36337</p>
    </footer>
  );
}

export default Footer;