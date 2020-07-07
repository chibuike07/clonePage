import React from "react";
import CustomBotton from "../Componesnts/Button/Button";
import Styles from "./Styles/SecondSection.module.css";
const SecondSection = () => {
  const { sectionCont, wrapper } = Styles;
  return (
    <div className={sectionCont}>
      <CustomBotton text={"Get Started"} />
    </div>
  );
};

export default SecondSection;
