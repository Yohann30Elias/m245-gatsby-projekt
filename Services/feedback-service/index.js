const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5002;

app.post("/feedback", (req, res) => {
  console.log("Feedback erhalten:", req.body);
  res.status(200).json({ message: "Danke für dein Feedback!" });
});

app.listen(PORT, () => {
  console.log(`📝 Feedback-Service läuft auf http://localhost:${PORT}`);
});
