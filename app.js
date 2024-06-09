const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success!",
    message: "Success!",
  });
});
app.listen(8000, () => {
  console.log("server is listen in 8000 port.");
});
