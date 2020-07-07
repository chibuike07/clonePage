import React from "react";
import Icon from "../../Assets/star.jpeg";
import CustomNavLinks from "../NavLinks/NavLinks";
import styles from "./Headers.module.css";
const Header = () => {
  const {
    container,
    wrapper,
    logoContainer,
    logoImage,
    spanText,
    navBar
  } = styles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={logoContainer}>
          <img src={Icon} alt={"logo"} className={logoImage} />
          <span className={spanText}>kofoundMe</span>
        </div>
        <div className={navBar}>
          <CustomNavLinks
            text={"About KofoundMe"}
            url={"/"}
            margin={"0 10px 0 0"}
          />
          <CustomNavLinks
            text={"How it works"}
            url={"/"}
            margin={"0 10px 0 0"}
          />
          <CustomNavLinks text={"FAQs"} url={"/"} margin={"0 10px 0 0"} />
          <CustomNavLinks text={"Blog"} url={"/"} margin={"0 10px 0 0"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
