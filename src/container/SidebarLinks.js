import React from "react";
import SidebarLink from "../components/SidebarLink";
import home from "../assets/27) Icon-home-fill.svg";
import briefcase from "../assets/27) Icon-briefcase-fill.svg";
import npm from "../assets/27) Icon-npm-fill.svg";
import person from "../assets/27) Icon-person-fill.svg";

function SidebarLinks() {
  return (
    <div className="sidebar-links">
      <SidebarLink img={home} imgAlt="home-icon" title="Dashboard" />
      <SidebarLink img={briefcase} alt="briefcase-icon" title="Gigs" />
      <SidebarLink img={npm} alt="npm-icon" title="Company" />
      <SidebarLink img={person} alt="person-icon" title="Account" />
    </div>
  );
}

export default SidebarLinks;
