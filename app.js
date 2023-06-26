const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express({ extends: false });

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded());

app.use(adminRoutes);

app.use(shopRoutes);

const server = http.createServer(app);

server.listen(3000);
