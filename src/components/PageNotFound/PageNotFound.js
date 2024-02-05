import React from "react";
import pnf from "../../images/pnf.png";
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="pnf">
      <img src={pnf} alt="Page Not Found" />
    </div>
  );
};

export default PageNotFound;
