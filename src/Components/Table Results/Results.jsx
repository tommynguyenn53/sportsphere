import React from "react";
import "./Results.css";

const raceResults = [
  { pos: 1, no: 4, driver: "Lando Norris", car: "McLaren Mercedes", laps: 57, time: "1:42:06.304", pts: 25 },
  { pos: 2, no: 1, driver: "Max Verstappen", car: "Red Bull Racing Honda RBPT", laps: 57, time: "+0.895s", pts: 18 },
  { pos: 3, no: 63, driver: "George Russell", car: "Mercedes", laps: 57, time: "+8.481s", pts: 15 },
  { pos: 4, no: 12, driver: "Andrea Kimi Antonelli", car: "Mercedes", laps: 57, time: "+10.135s", pts: 12 },
  { pos: 5, no: 23, driver: "Alexander Albon", car: "Williams Mercedes", laps: 57, time: "+12.773s", pts: 10 },
  { pos: 6, no: 18, driver: "Lance Stroll", car: "Aston Martin Aramco Mercedes", laps: 57, time: "+17.413s", pts: 8 },
  { pos: 7, no: 27, driver: "Nico Hulkenberg", car: "Kick Sauber Ferrari", laps: 57, time: "+18.423s", pts: 6 },
  { pos: 8, no: 16, driver: "Charles Leclerc", car: "Ferrari", laps: 57, time: "+19.826s", pts: 4 },
  { pos: 9, no: 81, driver: "Oscar Piastri", car: "McLaren Mercedes", laps: 57, time: "+20.448s", pts: 2 },
  { pos: 10, no: 44, driver: "Lewis Hamilton", car: "Ferrari", laps: 57, time: "+22.473s", pts: 1 },
  { pos: 11, no: 10, driver: "Pierre Gasly", car: "Alpine Renault", laps: 57, time: "+26.502s", pts: 0 },
  { pos: 12, no: 22, driver: "Yuki Tsunoda", car: "Racing Bulls Honda RBPT", laps: 57, time: "+29.884s", pts: 0 },
];

const RaceResultsTable = () => {
  return (
    <div className="table-container">
      <table className="race-results">
        <thead>
          <tr>
            <th>POS</th>
            <th>DRIVER</th>
            <th>CAR</th>
            <th>LAPS</th>
            <th>TIME/RETIRED</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {raceResults.map((result, index) => (
            <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{result.pos}</td>
              <td>{result.driver}</td>
              <td>{result.car}</td>
              <td>{result.laps}</td>
              <td>{result.time}</td>
              <td>{result.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaceResultsTable;
