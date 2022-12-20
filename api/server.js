import express from "express";
import cors from "cors";

import data from "./data.js";

const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.status(200).json(data);
});

const PORT = 4000;
app.listen(PORT, () => console.log("Server is listening on PORT 4000"));
