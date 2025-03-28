import React, { useEffect, useState } from "react";
import RaceResultsTable from "../TableResults/Results.jsx";
import "./ResultHandler.css"

const ResultsHandler = ({ selectedStat }) => {
  const [data, setData] = useState([]);
  const [tableTitle, setTableTitle] = useState("");

  useEffect(() => {
    if (!selectedStat) return; // Don't fetch if no selection

    fetch(`http://localhost:3001/getStats?stat=${encodeURIComponent(selectedStat)}`)
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setTableTitle(selectedStat);
      })
      .catch((error) => console.error("Error fetching results:", error));
  }, [selectedStat]);

  return (
    <div className="results-container">
      {selectedStat && (
        <>
          <h2 className="table-heading">{tableTitle.toUpperCase()}</h2> {/* Display the stat title */}
          <RaceResultsTable results={data} />
        </>
      )}
    </div>
  );
};

export default ResultsHandler;
