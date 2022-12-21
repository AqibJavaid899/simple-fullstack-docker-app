import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

let users = JSON.parse(fs.readFileSync("data.json").toString());

// Handling the Permission regarding Resource Sharing
app.use(cors());
app.use(bodyParser.json());

// GET Route which will return the JSON object
app.get("/get", (req, res) => {
  res.status(200).status(200).json(users);
});

app.post("/post", (req, res) => {
  const user = req.body;
  users = [...users, { id: users.length + 1, ...user }];
  fs.writeFileSync("data.json", JSON.stringify(users));
  res.status(201).json(users);
});

const PORT = 4001;
app.listen(PORT, () => console.log("Server is listening on PORT 4001"));
