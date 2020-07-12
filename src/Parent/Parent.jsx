import React from "react";
import HeaderView from "../Componesnts/Header/Header";
import SectionText from "../Divisons/SectionText";
import FooterSection from "../Divisons/FooterSection";
import SeconSection from "../Divisons/SecondSection";
import Styles from "./Parent.module.css";
const Parent = () => {
  const {
    appContainer,
    header,
    sectionDiv,

    thirdSection,
    footerCont
  } = Styles;
  return (
    <div className={appContainer}>
      <div className={header}>
        <HeaderView />
      </div>
      <div className={sectionDiv}>
        <SectionText />
      </div>
      <div className={thirdSection}>
        <SeconSection />
      </div>

      <div className={footerCont}>
        <FooterSection />
      </div>
    </div>
  );
};

export default Parent;
