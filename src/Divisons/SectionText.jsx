import React from "react";
import SectionTextStyle from "./Styles/SectionText.module.css";
import Image from "../Assets/studL1.png";

const SectionText = () => {
  const {
    container,
    wrapper,
    section,
    lorem,
    image,
    bigImg,
    leftSectionWrapper,
    firstText,
    secText
  } = SectionTextStyle;
  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={leftSectionWrapper}>
          <section className={section}>
            <strong className={firstText}>
              Find a technical and non-technical
            </strong>
            <br />
            <strong className={secText}>
              <b style={{ color: "blue" }}>co-founder</b> for your startup, idea
              or
            </strong>
            <br />

            <strong>existing business</strong>
          </section>

          <div className={lorem}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              assumenda fuga id placeat natus sint accusamus? Sint eos
              consectetur totam odit accusamus? Sint
            </p>
          </div>
        </div>
        <div className={image}>
          <img src={Image} alt={"lady"} />
        </div>
        <div>
          <div className={bigImg}>
            <img src={Image} alt={"lady"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionText;
