import React from "react";
import Image from "../Assets/studL1.png";
import CustomBotton from "../Componesnts/Button/Button";
const SecondSection = () => {
  return (
    <div>
      <div>
        <CustomBotton text={"get started"} />
        <div>
          <img src={Image} alt={"a lady"} />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
