const express = require('express');
const app = express();
const port = 3000;

app.get('/health', (req, res) => {
  res.json({
    status: "ok",
    msg: "Hello Mabelka"
  });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
