import React from "react";
import Icon from "./Icon";
import alarm from "../assets/Group 140.svg";
import email from "../assets/27) Icon-email.svg";
import setting from "../assets/27) Icon-settings.svg";
import avatar from "../assets/Rectangle 13/Rectangle 13.png";

function IconContainer() {
  return (
    <div className="icon-container">
      <Icon icon={alarm} iconAlt="alarm" />
      <Icon icon={email} iconAlt="email" />
      <Icon icon={setting} iconAlt="setting" />
      <Icon icon={avatar} iconAlt="avatar" />
    </div>
  );
}

export default IconContainer;
