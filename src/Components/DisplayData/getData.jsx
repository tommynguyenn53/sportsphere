import React, { useState, useEffect } from 'react';

function GetData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001')  // Correct API URL
      .then(response => response.json())  // Expect JSON
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>F1 Fastest Laps</h2>
      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.track_name} - {item.driver} ({item.nationality}): {item.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default GetData;
