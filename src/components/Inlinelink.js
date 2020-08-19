import React from "react";

const InlineLink = ({ text, counts, active }) => {
  return (
    <div className={"inline-link " + (active ? "active" : null)}>
      <span>{text}</span> <span className="digits">{counts}</span>
    </div>
  );
};

export default InlineLink;
