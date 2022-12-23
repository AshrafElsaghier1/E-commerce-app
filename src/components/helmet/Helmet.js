import React from "react";

const Helmet = ({ children, title }) => {
  document.title = title ? `E-commerce-app | ${title}` : "";
  return <>{children}</>;
};

export default Helmet;
