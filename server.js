const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// const actionsRouter = require('./routers/actionsRouter.js');
// const projectsRouter = require('./routers/projectsRouter.js');

const server = express();

// Custom Middleware

// const logger = (req, res, next) => {
//   console.log(`Requesting: ${req.url}`);
//   console.log(`Body being passed: ${req.body}`);

//   next();
// };
// server.use(logger);

server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());
server.use(cors());

// server.use('/api/actions', actionsRouter);
// server.use('/api/projects', projectsRouter);

const port = 5000;

server.listen(port, () => {
  console.log('NO.. SLEEP.. TILL.. SPRINTS OVER');
});
