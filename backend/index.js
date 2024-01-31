const express = require("express");
const rootRouter = require("./routes");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(
  cors({

  })
);
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000, () => console.log("BE on 3000 ready"));
