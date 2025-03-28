import express from 'express';
import serverless from 'serverless-http';
import { getStats } from '../sportspheremodel.js'; // Function to fetch results


const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// API endpoint for stats
app.get('/getStats', async (req, res) => {
  const { stat } = req.query;

  try {
    const results = await getStats(stat); // Fetch data from DB
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Wrap your Express app into a serverless function
export const handler = serverless(app);