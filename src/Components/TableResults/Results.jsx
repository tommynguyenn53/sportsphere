import React from "react";
import "./Results.css";

// Function to capitalize the first letter of each word
const capitalizeFirstLetter = (string) => {
  return string.replace(/\b\w/g, (char) => char.toUpperCase());
};

// Function to generate Wikipedia URL for an athlete
const generateWikipediaUrl = (name) => {
  return `https://en.wikipedia.org/wiki/${name.replace(/_/g, '_')}`;
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
                <td key={colIndex}>
                  {header === "name" ? (
                    <a href={generateWikipediaUrl(row[header])} target="_blank" rel="noopener noreferrer" className="athlete-link">
                      {row[header].replace(/_/g, " ")}
                    </a>
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceResultsTable;