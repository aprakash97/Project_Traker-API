// const express = require("express");
import express from "express";

const app = express();

//executed when page viewed on browser on URL
app.get("/", (req, res) => {
  console.log("hello form express");
  res.status(200);
  res.json({ message: "hello" });
});

export default app;
