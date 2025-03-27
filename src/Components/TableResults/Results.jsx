import React from "react";
import "./Results.css";

// Function to capitalize the first letter of each word
const capitalizeFirstLetter = (string) => {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
};

const RaceResultsTable = ({ results }) => {
  if (results.length === 0) return null; // Hide table if no data

  const headers = Object.keys(results[0]); // Extract column names dynamically

  return (
    <div className="table-container">
      <table className="race-results">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{capitalizeFirstLetter(header.replace(/_/g, " "))}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "even-row" : "odd-row"}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceResultsTable;