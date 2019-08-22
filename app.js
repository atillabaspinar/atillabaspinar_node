const http = require('http');
const express = require('express');
const mongoConnect = require('./utils/database').mongoConnect;

const app = express();

const articleRoutes = require('./routes/article');

app.use(articleRoutes);

const server = http.createServer(app);


mongoConnect(
  server.listen(process.env.PORT || 8000)
);

