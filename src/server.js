const express = require('express');
const mongoose = require('mongoose');
const corsMiddleware = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const productsRouter = require('./products/products_routes');
const usersRouter = require('./users/users_routes');
const ordersRouter = require('./orders/orders_routes');
const { port, dbURL } = require('./config');

const app = express();

const errorHandler = (err, req, res, next)  => {
  res
    .status(500)
    .send('Error found: ' + err.stack);
};

const startServer = () => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(express.json())
    .use(corsMiddleware())
    .use(morgan('dev'))
    .use('/products', productsRouter)
    .use('/users', usersRouter)
    .use('/orders', ordersRouter)
    .use(errorHandler);

    mongoose.connect(dbURL, { useNewUrlParser: true }, function(err) {
      if (err) return console.log(err);
      app.listen(port);
    });

  console.log('Server was started at http://localhost:3001');
};

module.exports = startServer;