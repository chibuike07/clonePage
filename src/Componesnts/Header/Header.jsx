import React from "react";
import Icon from "../../Assets/star.star.jpeg";
import Image from "../../Assets/studL1.png";
import CustomNavLinks from "../NavLinks/NavLinks";
const Header = () => {
  return (
    <div>
      <div>
        <div>
          <image src={Icon} alt={"logo"} />
          <span>kofoundMe</span>
        </div>
        <div>
          <CustomNavLinks text={"About KofoundMe"} />
          <CustomNavLinks text={"how it works"} />
          <CustomNavLinks text={"FAQs"} />
          <CustomNavLinks text={"Blog"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
