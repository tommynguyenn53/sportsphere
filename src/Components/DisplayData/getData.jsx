import React, { useState, useEffect } from "react";
import Dropdown from "/src/Components/Dropdown/Dropdown.jsx"; // Import the dropdown component

function GetData() {
  // State to store the fetched data
  const [data, setData] = useState(null);
  // State to store the selected statistic
  const [selectedStat, setSelectedStat] = useState(null);
  // State to handle the loading state
  const [loading, setLoading] = useState(false);

  // useEffect hook to fetch data whenever the selectedStat changes
  useEffect(() => {
    if (!selectedStat) return; // Don't fetch if no stat is selected

    // Async function to fetch data from the API
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        // Fetch data from the API with the selected stat
        const response = await fetch(`http://localhost:3001/getStats?stat=${encodeURIComponent(selectedStat)}`); // Adjusted port to 3001
        const result = await response.json();
        setData(result); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null); // Set data to null in case of an error
      }
      setLoading(false); // Set loading to false after fetching
    };

    fetchData();
  }, [selectedStat]); // Re-fetch when stat changes

  return (
    <div>
      <h2>Sports Statistics</h2>

      {/* Use Dropdown component to select stats and pass the setSelectedStat function */}
      <Dropdown setSelectedStat={setSelectedStat} />

      {/* Display Data */}
      {loading ? (
        <p>Loading...</p> // Show loading text while data is being fetched
      ) : data ? (
        <ul>
          {/* Map through the fetched data and display each item */}
          {data.map((item, index) => (
            <li key={index}>
              {item.position ? `#${item.position} ` : ""} {/* Display position if available */}
              {item.name || item.track_name} ({item.nationality}): {item.championships || item.pole_positions || item.race_wins || item.podiums || item.fastest_laps || item.time} {/* Display relevant data */}
            </li>
          ))}
        </ul>
      ) : (
        <p>{selectedStat ? "No data available." : "Please select a statistic."}</p> // Show message based on the selected stat
      )}
    </div>
  );
}

export default GetData;