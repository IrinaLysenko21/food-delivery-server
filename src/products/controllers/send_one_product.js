const url = require('url');
const fs = require("fs");
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const getId = url => {
  const lastIndex = url.lastIndexOf('/');

  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const getProduct = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const id = getId(parsedUrl.path);

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = dataParser(data);

    const product = allProducts.find((el) => el.id === Number(id));

    let res = {};
    if (!product) {
      res = {
        status: 'no products',
        products: []
      };
    } else {
      res = {
        status: 'success',
        products: [product]
      };
    }

    response.status(200).json(res);
  });
};

module.exports = getProduct;
