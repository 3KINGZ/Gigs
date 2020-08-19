import React from "react";
import InlineLink from "../components/Inlinelink";

function InlineLinks() {
  return (
    <div className="link-container">
      <div className="inline-links">
        <InlineLink text="All gigs" counts={3404} active={true} />
        <InlineLink text="My gigs" counts={1200} />
        <InlineLink text="Rejected gigs" counts={100} />
      </div>
    </div>
  );
}

export default InlineLinks;
