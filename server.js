const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ msg: "okay" });
});

app.get("/ejs", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("server started");
});
