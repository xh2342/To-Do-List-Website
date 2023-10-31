import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var toDoList = ["finish sales report", "weekly check-in", "training"];
var time = ["1:00 - 2:00pm", "2:00-3:00pm", "tomorrow"];

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { toDoList: toDoList, time: time });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {});
});

app.get("/life", (req, res) => {
  res.render("life.ejs", {});
});

app.post("/submit", (req, res) => {
  toDoList.push(req.body["newItem"]);
  time.push("TBD");
  res.redirect("/");
});

app.post("/remove", (req, res) => {
  const indexToRemove = req.body["index"];

  toDoList.splice(indexToRemove, 1);
  time.splice(indexToRemove, 1);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
