// const http = require("http");

// const server = http.createServer(async (req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     // res.statusCode(200);
//     console.log("Hello From Server");
//     res.end();
//   }
// });

// server.listen(3001, () => {
//   console.log("Prakash server on http://localhost:3001");
// });

// const app = require("./server");

import app from "./server";

//loads the environment variable
import * as dotenv from "dotenv";
dotenv.config();
import config from "./config";

//execute on terminal for command node src/index.js
app.listen(config.port, () => {
  console.log(`Hello on http://localhost:${config.port}`);
});
