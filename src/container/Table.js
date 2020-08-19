import React from "react";
import TableRow from "../components/Tablerow";
import updown from "../assets/updown.svg";

function Table({ data }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Role</th>
            <th>Company</th>
            <th>
              Date <img src={updown} alt="up-down icon"></img>
            </th>
            <th>
              Salary($) <img src={updown} alt="up-down icon" />
            </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow data={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
