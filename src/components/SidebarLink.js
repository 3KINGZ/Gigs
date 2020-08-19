import React from "react";

function SideBarLink({ img, imgAlt, title }) {
  return (
    <div className="sidebar-link">
      <div>
        <img src={img} alt={imgAlt} />
      </div>
      <div>{title}</div>
    </div>
  );
}

export default SideBarLink;
