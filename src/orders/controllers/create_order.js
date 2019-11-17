const fs = require('fs');
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const saveOrder = orderString => {
  const order = dataParser(orderString);

  const pathToUserFolder = path.join(__dirname, '../../', 'db/', 'users/', `${order.user}/`, 'orders');
  const pathToUserFile = path.join(pathToUserFolder, `${order.id}.json`);

  fs.mkdir(pathToUserFolder, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.writeFile(pathToUserFile, orderString, function (err) {
    if (err) throw err;
  });

  return order;
};

const createOrderRoute = (request, response) => {

  if (request.method === 'POST') {
    const order = request.body;
    console.log('order');

    if (order && order.user && order.products && order.deliveryType && order.deliveryAdress) {

      const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

      fs.readFile(filePath, function (err, data) {
        if (err) {
            return console.error(err);
        }

        const allProducts = dataParser(data);

        const orderedProducts = order.products;

        const products = allProducts.filter(el => {
          return orderedProducts.find(elem => el.id === Number(elem));
        });

        const orderToSave = {
          id: Date.now(),
          user: order.user,
          products: products,
          deliveryType: order.deliveryType,
          deliveryAdress: order.deliveryAdress
        };

        if (orderToSave.products !== []) {
          saveOrder(JSON.stringify(orderToSave));
        }

        let res = {};

        if (orderToSave.products === []) {
          res = {
            status: 'failed',
            order: null
          };

          response.status(200).json(res);
        } else {
          res = {
            status: 'success',
            order: orderToSave
          };
          response.status(201).json(res);
        }
      });
    } else {
      res.status(400).send('Bad Request');
    }
  };
};

module.exports = createOrderRoute;