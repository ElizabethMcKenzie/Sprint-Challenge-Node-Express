const express = require('express');
const db = require('./data/dbConfig.js');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const projectsRouters = require('./routers/projectsRouters.js');
const server = express();

// Middleware
const logger = (req, res, next) => {
  next();
};
server.use(morgan('dev'));
server.use;
server.use(helmet());
server.use(cors());

server.use('/api/projects', projectsRouters);
server.use(express.json());

const port = 5000;

server.listen(port, () => {
  console.log('NO.. SLEEP.. TILL SPRINTS OVER');
});
