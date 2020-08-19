import React from "react";

function TableRow({ data }) {
  return (
    <tr className="main-table-content">
      <td className="first-td">
        <input type="checkbox" className="input-checkbox" />
      </td>
      <td>{data.role}</td>
      <td>{data.company}</td>
      <td>{data.date}</td>
      <td>{data.salary}</td>
      <td className="last-td">
        <button>Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;
