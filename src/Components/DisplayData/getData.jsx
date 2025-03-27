import React, { useState, useEffect } from "react";
import Dropdown from "/src/Components/Dropdown/Dropdown.jsx"; // Import the dropdown component

function GetData() {
  const [data, setData] = useState(null);
  const [selectedStat, setSelectedStat] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedStat) return; // Don't fetch if no stat is selected

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/getStats?stat=${encodeURIComponent(selectedStat)}`); // Adjusted port to 3001
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [selectedStat]); // Re-fetch when stat changes

  return (
    <div>
      <h2>Sports Statistics</h2>

      {/* Use Dropdown component to select stats */}
      <Dropdown setSelectedStat={setSelectedStat} />

      {/* Display Data */}
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.position ? `#${item.position} ` : ""}
              {item.name || item.track_name} ({item.nationality}): {item.championships || item.pole_positions || item.race_wins || item.podiums || item.fastest_laps || item.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>{selectedStat ? "No data available." : "Please select a statistic."}</p>
      )}
    </div>
  );
}

export default GetData;