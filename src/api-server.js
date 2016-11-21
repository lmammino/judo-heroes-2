'use strict';

import { Server } from 'http';
import Express from 'express';
import athletes from './data/athletes';

const app = new Express();
const server = new Server(app);

app.get('/athletes', (req, res, next) => {
  res.json(athletes);
});

app.get('/athletes/:id', (req, res, next) => {
  const athlete = athletes.filter((athlete) => athlete.id === req.params.id)[0];
  if (athlete) {
    return res.json(athlete);
  }

  return next();
});

// start the server
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`API Server running on http://localhost:${port} [${env}]`);
});
