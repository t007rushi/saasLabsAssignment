import React from "react";

const Table = ({ projects }) => (
  <table>
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Percentage funded</th>
        <th>Amount pledged</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((project, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{project["percentage.funded"]}</td>
          <td>{project["amt.pledged"]}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
