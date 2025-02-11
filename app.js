const http = require("http");

const fs = require("fs");
const router = require("./route");

const server = http.createServer(router);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
