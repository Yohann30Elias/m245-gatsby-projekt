const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 5000;

app.get("/courses", (req, res) => {
  res.json([
    {
      title: "HTML & CSS Basics",
      description: "Lerne HTML und CSS von Grund auf.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "JavaScript Advanced",
      description: "Logik und Dynamik in Webapps.",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=600&q=80"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`🎓 Course-Service läuft auf http://localhost:${PORT}`);
});
