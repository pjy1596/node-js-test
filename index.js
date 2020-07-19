const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://pjy1596:pjy5200@cluster0.hz0eq.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("connected..."))
  .catch((err) => console.log("error..."));

app.get("/", (req, res) => res.send("Hello World!~~~~~수정 중~~~"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

//
