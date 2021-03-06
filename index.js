const express = require("express");
const app = express();
const port = 8080;

app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error : ${err}`);
  }

  console.log(`Server is up and running on ${port}`);
});
