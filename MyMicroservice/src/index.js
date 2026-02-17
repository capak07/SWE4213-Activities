const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/me', (req, res) => {
  res.json({
    name: "Atharva Kadam",
    role: "Software Engineer",
    specialty: "Microservices & Docker",
    status: "Online"
  });
});

app.listen(port, () => {
  console.log(`MyMicroservice listening on port ${port}`);
});
