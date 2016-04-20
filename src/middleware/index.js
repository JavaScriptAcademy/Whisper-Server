'use strict';

const updateLastVisit = require('./updateLastVisit');
const getRecentVisit = require('./getRecentVisit');
const updateMessages = require('./updateMessages');


const login = require('./login');

const signup = require('./signup');
const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.post('/signup', signup(app));
  app.post('/login', login(app));
  app.post('/users/resetRecentVisit', updateLastVisit(app));
  app.get('/users/getRecentVisit/:userId', getRecentVisit(app));
  app.post('/rooms/updateMessages', updateMessages(app));
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};