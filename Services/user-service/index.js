const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 5001;

app.get("/user", (req, res) => {
  res.json({
    name: "Max Mustermann",
    email: "max@example.com",
    completedCourses: 2
  });
});

app.listen(PORT, () => {
  console.log(`👤 User-Service läuft auf http://localhost:${PORT}`);
});
