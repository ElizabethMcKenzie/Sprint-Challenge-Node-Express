const express = require('express');
const db = require('./data/dbConfig.js');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const projectsRouters = require('./routers/projectsRouters.js');
const server = express();

server.use(express.json());
const logger = (req, res, next) => server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

const port = 5000;

server.listen(port, () => {
  console.log('NO.. SLEEP.. TILL SPRINTS OVER');
});
