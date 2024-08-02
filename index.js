const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const bodyParser = require("body-parser");
const Post = require("./schema");

const app = express();

app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/fetch", async (req, res) => {
  try {
    const post = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const response = post.data;
    await Post.insertMany(response);
    res.status(200).send("Data saved in database");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/posts", async (req, res) => {
  try {
    const fetch = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const response = fetch.data;
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => {
  console.log("Server is running");
});
