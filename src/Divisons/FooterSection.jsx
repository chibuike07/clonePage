import React from "react";
import Image from "../Assets/studL1.png";
import FooterSectionStyles from "./Styles/FooterSection.module.css";
const FooterSection = () => {
  const {
    container,
    wrapper,
    section,
    pairedImage,
    asidecont,
    divC,
    A,
    B,
    C
  } = FooterSectionStyles;
  return (
    <div className={container}>
      <div className={wrapper}>
        <section className={section}>
          <div className={pairedImage}>
            <img src={Image} alt={Image} className={A} />
            <img src={Image} alt={Image} className={B} />
          </div>
          <div className={divC}>
            <img src={Image} alt={Image} className={C} />
          </div>
        </section>
        <aside>
          <div className={asidecont}>
            <div>
              <h4>About Us</h4>
              <strong>The first</strong>
              <br />
              <strong>of its kind in Africa</strong>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing. Corporis,
                eum sunt sint aliquam optio dignissimos assumenda sit officiis?
                Nobis sit error tenetur totam veritatis nisi unde doloremque,
                porro debitis mollitia! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Iste, quam! Temporibus, beatae, facilis optio
                natus odit iusto cupiditate accusamus deserunt reprehenderit ex
                repellendus necessitatibus officiis nobis blanditiis aliquam nam
                tempora. Lorem ipsum dolor sit amet facilis optio natus odit
                iusto cupiditate accusamus deserunt reprehenderit ex repellendus
                necessitatibus officiis nobis blanditiis aliquam nam tempora.
                Lorem ipsum dolor sit amet facilis optio natus odit iusto
                cupiditate accusamus deserunt reprehenderit ex repellendus
                necessitatibus officiis nobis blanditiis aliquam nam tempora.
                Lorem ipsum dolor sit amet reprehenderit ex repellendus
                necessitatibus officiis nobis blanditiis aliquam nam tempora.
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FooterSection;
