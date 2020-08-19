import React, { useState } from "react";

function AddNewGig() {
  const [next, setNext] = useState(false);
  return (
    <div className="new">
      <div className="add-new-gig">
        <div>
          <h3 className="new-gig-header">New gig</h3>
          <div className="add-new-gig">
            <div className="options" style={{ height: "25vh" }}>
              <div onClick={() => setNext(!next)}>Basic Data</div>
              <div onClick={() => setNext(!next)}>Renumeration</div>
            </div>
            {!next ? (
              <div className="container-input" style={{ width: "100%" }}>
                <div className="input-flex-vertical">
                  <div>
                    <label>Role</label>
                    <input type="text" className="input-width" />
                  </div>
                  <div>
                    <label>Company</label>
                    <input type="text" className="input-width" />
                  </div>
                </div>
                <div className="input-flex-vertical special">
                  <div>
                    <label>Location</label>
                    <input type="text" className="input-width" />
                  </div>
                  <div>
                    <label>State</label>
                    <input type="text" className="input-width" />
                  </div>
                </div>
                <div className="input-flex-vertical special">
                  <div>
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      className="input-width"
                    />
                  </div>
                </div>
                <div className="input-flex-vertical special">
                  <div>
                    <label>Add tags</label>
                    <input type="text" className="input-width" />
                  </div>
                </div>
                <div className="buttons">
                  <button>Cancel</button>
                  <button>Continue</button>
                </div>
              </div>
            ) : (
              <RenumerationInput />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const RenumerationInput = () => {
  return (
    <div
      className="container-input"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginLeft: "8%", marginBottom: "3%" }}>Salary</div>
      <div className="input-flex-vertical">
        <div>
          <label></label>
          <input type="text" className="input-width" placeholder="minimum" />
        </div>
        <div>
          <label></label>
          <input type="text" className="input-width" placeholder="maximum" />
        </div>
      </div>
    </div>
  );
};

export default AddNewGig;
