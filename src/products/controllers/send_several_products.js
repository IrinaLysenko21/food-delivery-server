const url = require('url');
const fs = require("fs");
const path = require('path');
const querystring = require('querystring');
const dataParser = require('../../helpers/dataParser');

const getProducts = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const pathWithIds = parsedUrl.path;
  const idsQuery = querystring.parse(pathWithIds);
  const idsStr = Object.values(idsQuery)[0];
  const ids = idsStr.slice(1, idsStr.length - 1).split(',');

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = dataParser(data);

    const products = allProducts.filter(el => {
      return ids.find(elem => el.id === Number(elem));
    });

    let res = {};
    if (products.length === 0) {
      res = {
        status: 'no products',
        products: []
      };
    } else {
      res = {
        status: 'success',
        products: products
      };
    }

    response.status(200).json(res);
  });
};

module.exports = getProducts;

