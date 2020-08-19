import React from "react";
import IconContainer from "../components/Iconcontainer";

const ActionCenter = () => {
  return (
    <div className="action-center">
      <input type="text" placeholder="Search" className="top-input" />
      <IconContainer />
    </div>
  );
};

export default ActionCenter;
