import React from "react";

const Header = ({ onClickHander }) => {
  return (
    <div className="content-container">
      <div className="header">
        <h1>Gigs</h1>
        <button onClick={onClickHander}>New gig +</button>
      </div>
    </div>
  );
};

export default Header;
