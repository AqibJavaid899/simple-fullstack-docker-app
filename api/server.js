import express from "express";
import cors from "cors";

import data from "./data.js";

const app = express();

// Handling the Permission regarding Resource Sharing
app.use(cors());

// GET Route which will return the JSON object
app.use("/", (req, res) => {
  res.status(200).json(data);
});

const PORT = 4000;
app.listen(PORT, () => console.log("Server is listening on PORT 4000"));
