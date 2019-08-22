const http = require('http');
const express = require('express');

const app = express();

const articleRoutes = require('./routes/article');

app.use(articleRoutes);

const server = http.createServer(app);

server.listen(8080);