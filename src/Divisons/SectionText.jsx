import React from "react";
import SectionTextStyle from "./Styles/SectionText.module.css";
const SectionText = () => {
  const { container, wrapper, section, lorem } = SectionTextStyle;
  return (
    <div className={container}>
      <div className={wrapper}>
        <section className={section}>
          <strong>Find a technical and non-technical</strong>
          <br />
          <strong style={{ fontSize: "26.4px" }}>
            <b style={{ color: "blue" }}>co-founder</b> for your startup, idea
            or
          </strong>
          <br />

          <strong>existing business</strong>
        </section>

        <div className={lorem}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            assumenda fuga id placeat natus sint accusamus? Sint eos consectetur
            totam odit accusamus? Sint
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionText;
