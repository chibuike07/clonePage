import React from "react";
import CustomBotton from "../Componesnts/Button/Button";
import Styles from "./Styles/SecondSection.module.css";
const SecondSection = () => {
  const { sectionCont } = Styles;
  return (
    <div className={sectionCont}>
      <CustomBotton
        text={"Get Started"}
        width={"12vw"}
        backgroundColor={"rgb(21, 125, 236)"}
        borderRadius={"5px"}
        color={"rgb(187, 211, 236)"}
        margin={"0 0 0 6.4vw"}
      />
    </div>
  );
};

export default SecondSection;
