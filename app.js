const http = require("http");

// const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoute = require("./router/admin");

const app = express();

// Serve static files from the "public" directory
app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoute);

// const server = http.createServer(app);
app.listen(1234,()=>{
  console.log("Server is running on port 1234");
});
