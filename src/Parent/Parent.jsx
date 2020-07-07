import React from "react";
import HeaderView from "../Componesnts/Header/Header";
import SectionText from "../";
import FooterSection from "../Divisons/FooterSection";
import SeconSection from "../Divisons/SecondSection";
import CustomButton from "../Componesnts/Button/Button";
import CustomNav from "../Componesnts/NavLinks/NavLinks";
import Styles from "./Parent.module.css";
const Parent = () => {
  const { appContainer, header, regWrapper } = Styles;
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
      <div>
        <SeconSection />
      </div>
    </div>
  );
};

export default Parent;
