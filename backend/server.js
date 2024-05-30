const express = require('express');
const storage = require('node-persist');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

(async () => {
  await storage.init();

  app.post('/score', async (req, res) => {
    const { score } = req.body;
    let runCount = (await storage.getItem('runCount')) || 0;
    let totalScore = (await storage.getItem('totalScore')) || 0;

    runCount += 1;
    totalScore += score;

    await storage.setItem('runCount', runCount);
    await storage.setItem('totalScore', totalScore);

    res.json({ runCount, totalScore });
  });

  app.get('/score', async (req, res) => {
    const runCount = (await storage.getItem('runCount')) || 0;
    const totalScore = (await storage.getItem('totalScore')) || 0;

    res.json({ runCount, totalScore });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
