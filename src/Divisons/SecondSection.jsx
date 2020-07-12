import React from "react";
import CustomBotton from "../Componesnts/Button/Button";
import Styles from "./Styles/SecondSection.module.css";
import Image from "../Assets/studL1.png";
const SecondSection = () => {
  const { container, wrapper, sectionCont, button, splashImage } = Styles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={sectionCont}>
          <CustomBotton text={"Get Started"} className={button} />
        </div>
        <div className={splashImage}>
          <img src={Image} alt={Image} />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
