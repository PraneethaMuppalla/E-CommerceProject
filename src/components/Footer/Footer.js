import React from "react";
import { YouTubeIcon, WhatsAppIcon, FaceBookIcon } from "./FooterIcons";

import classes from "./Footer.module.css";
const GenericsHeader = () => {
  return (
    <footer className={classes.container}>
      <h1>The Generics</h1>
      <ul>
        <YouTubeIcon />
        <WhatsAppIcon />
        <FaceBookIcon />
      </ul>
    </footer>
  );
};

export default GenericsHeader;
