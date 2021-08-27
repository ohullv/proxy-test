const request = require("request");
const express = require("express");
const app = express();
const port = 8080;

const url = "YOURURLHERE";

app.get("/", (req, res) => {
  request.get(url).pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
