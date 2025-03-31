import React, { useEffect, useState } from "react";
import RaceResultsTable from "../TableResults/Results.jsx";
import "./ResultHandler.css"

const ResultsHandler = ({ selectedStat }) => {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to store the title of the table
  const [tableTitle, setTableTitle] = useState("");

  // useEffect hook to fetch data whenever the selectedStat changes
  useEffect(() => {
    if (!selectedStat) return; // Don't fetch if no stat is selected

    // Fetch data from the API based on the selected stat
    fetch(`http://localhost:3001/getStats?stat=${encodeURIComponent(selectedStat)}`)
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData); // Set the fetched data to the state
        setTableTitle(selectedStat); // Set the table title to the selected stat
      })
      .catch((error) => console.error("Error fetching results:", error)); // Log any errors
  }, [selectedStat]); // Re-fetch when stat changes

  return (
    <div className="results-container">
      {/* Render the table only if a stat is selected */}
      {selectedStat && (
        <>
          <h2 className="table-heading">{tableTitle.toUpperCase()}</h2> {/* Display the stat title */}
          <RaceResultsTable results={data} /> {/* Display the results table */}
        </>
      )}
    </div>
  );
};

export default ResultsHandler;