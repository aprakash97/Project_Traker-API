// const express = require("express");
import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

//middleware - logging use
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//custom middleware
// app.use((req, res, next) => {
//   req.shhhh_secret = "doggy";
//   next();
// });

//executed when page viewed on browser on URL

//Registering listeners
// app.get("/", (req, res) => {
//   console.log("hello form express");
//   res.status(200);
//   res.json({ message: "hello" });
// });

//ERROR HANDLER
app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("sfaafsafsd"));
  }, 1);
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

//ERROR HANDLER
app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401);
    res.json({ message: "unauthorized" });
  } else if (err.type === "input") {
    res.status(400);
    res.json({ message: "invalid input" });
  } else {
    res.status(500);
    res.json({ message: "oops, that's on us" });
  }
});

export default app;
