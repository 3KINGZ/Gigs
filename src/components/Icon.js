import React from "react";

const Icon = ({ icon, iconAlt }) => {
  return (
    <div>
      <img src={icon} alt={iconAlt} />
    </div>
  );
};

export default Icon;
