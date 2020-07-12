import React from "react";
import CustomBotton from "../Componesnts/Button/Button";
import Styles from "./Styles/SecondSection.module.css";
import Image from "../Assets/studL1.png";
const SecondSection = () => {
  const { container, wrapper, sectionCont, splashImage } = Styles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={sectionCont}>
          <CustomBotton
            text={"Get Started"}
            width={"12vw"}
            backgroundColor={"rgb(21, 125, 236)"}
            borderRadius={"5px"}
            color={"rgb(187, 211, 236)"}
            margin={"0 0 0 7.3vw"}
          />
        </div>
        <div className={splashImage}>
          <img src={Image} alt={Image} />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
