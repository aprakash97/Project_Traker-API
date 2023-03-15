// const express = require("express");
import express from "express";
import router from "./router";
import morgan from "morgan";

const app = express();

//middleware - logging use
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//custom middleware
app.use((req, res, next) => {
  req.shhhh_secret = "doggy";
  next();
});
//executed when page viewed on browser on URL
//Registering listeners
app.get("/", (req, res) => {
  console.log("hello form express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", router);

export default app;
