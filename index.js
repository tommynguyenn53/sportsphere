import express from 'express';
import { getStats } from './sportspheremodel.js'; // Function to fetch results

const app = express();
const port = 3001;

app.use(express.json());

// Middleware to set CORS headers to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// API endpoint for fetching stats
app.get('/getStats', async (req, res) => {
  const { stat } = req.query;

  try {
    const results = await getStats(stat); // Fetch data from DB
    res.status(200).json(results); // Send the results as a JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send an error response if fetching data fails
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});