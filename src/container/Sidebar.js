import React from "react";
import SideBarLinks from "./SidebarLinks";
import logo from "../assets/logo.svg";

const SideBar = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <SideBarLinks />
    </div>
  );
};

export default SideBar;
