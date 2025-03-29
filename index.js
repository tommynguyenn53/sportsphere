import express from 'express';
import { getStats } from './sportspheremodel.js'; // Function to fetch results

const app = express();
const port = 3001;

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

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});