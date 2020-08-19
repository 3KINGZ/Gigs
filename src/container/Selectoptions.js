import React from "react";
import design from "../assets/27) Icon-color-palette.svg";

function Select() {
  return (
    <div className="select">
      <div>Freelance</div>
      <select name="drinks" id="name" required>
        <option value="re" disabled selected hidden className="iccc">
          Keywords
        </option>
        <option value="coffee">Coffee</option>
        <option value="tea">Tea</option>
        <option value="milk">Milk</option>
      </select>
      <select>
        <option value="re" disabled selected hidden className="iccc">
          Location
        </option>
        <option value="coffee">Coffee</option>
        <option value="tea">Tea</option>
        <option value="milk">Milk</option>
      </select>
      <select>
        <option value="re" disabled selected hidden className="iccc">
          Remote friendly
        </option>
        <option value="coffee">Coffee</option>
        <option value="tea">Tea</option>
        <option value="milk">Milk</option>
      </select>
      <div className="select-active">
        <img src={design} alt="design-icon" /> Design
      </div>
      <div>Contract</div>
    </div>
  );
}

export default Select;
