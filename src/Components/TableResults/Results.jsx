import React, { useEffect, useState } from "react";
import "./Results.css";

const RaceResultsTable = () => {
  const [raceResults, setRaceResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/results") // Call API endpoint
      .then((response) => response.json())
      .then((data) => setRaceResults(data))
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  return (
    <div className="table-container">
      <table className="race-results">
        <thead>
          <tr>
            <th>Track Name</th>
            <th>Driver Name</th>
            <th>Nationality</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {raceResults.map((result, index) => (
            <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{result.track_name}</td>
              <td>{result.driver}</td>
              <td>{result.nationality}</td>
              <td>{result.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceResultsTable;
