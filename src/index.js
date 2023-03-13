const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // res.statusCode(200);
    console.log("Hello From Server");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Prakash server on http://localhost:3001");
});
