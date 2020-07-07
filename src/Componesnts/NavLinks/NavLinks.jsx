import React from "react";
import { NavLink } from "react-router-dom";
const NavLinks = ({
  url,
  width,
  height,
  text,
  className,
  textDecoration,
  color,
  textTransform,
  border,
  borderRadius,
  padding,
  backgroundColor,
  margin
}) => (
  <div>
    <NavLink
      to={url}
      className={className}
      style={{
        textDecoration: textDecoration ? textDecoration : "none",
        color: color ? color : "#000",
        textTransform: textTransform ? textTransform : null,
        borderRadius: borderRadius ? borderRadius : null,
        padding: padding ? padding : null,
        backgroundColor: backgroundColor ? backgroundColor : null,
        border: border ? border : null,
        width: width ? width : null,
        height: height ? height : null,
        margin: margin ? margin : null
      }}
    >
      {text ? text : "am here to navigate"}
    </NavLink>
  </div>
);

export default NavLinks;
