import React from "react";
import HeaderView from "../Componesnts/Header/Header";
import SectionText from "../Divisons/SectionText";
import FooterSection from "../Divisons/FooterSection";
import SeconSection from "../Divisons/SecondSection";
import CustomButton from "../Componesnts/Button/Button";
import Image from "../Assets/studL1.png";
import Styles from "./Parent.module.css";
const Parent = () => {
  const {
    appContainer,
    header,
    regWrapper,
    sectionDiv,
    image,
    bigImg,
    splashImage,
    thirdSection
  } = Styles;
  return (
    <div className={appContainer}>
      <div className={header}>
        <HeaderView />
        <div className={regWrapper}>
          <CustomButton
            text={"Log In"}
            backgroundColor={"inherit"}
            color={"rgb(17, 125, 236)"}
          />
          <CustomButton
            text={"Sign Up"}
            color={"rgb(187, 211, 236)"}
            width={"90px"}
            borderRadius={"5px"}
            backgroundColor={"rgb(21, 125, 236)"}
          />
        </div>
      </div>

      <div className={sectionDiv}>
        <SectionText />

        <div className={image}>
          <img src={Image} alt={"lady"} />
        </div>
        <div>
          <div className={bigImg}>
            <img src={Image} alt={"lady"} />
          </div>
        </div>
      </div>
      <div className={thirdSection}>
        <SeconSection />
        <div className={splashImage}>
          <img src={Image} alt={Image} />
        </div>
      </div>

      <div style={{ marginTop: "5em" }}>
        <FooterSection />
      </div>
    </div>
  );
};

export default Parent;
