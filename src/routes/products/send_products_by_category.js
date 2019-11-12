const url = require('url');
const fs = require("fs");
const path = require('path');
const querystring = require('querystring');

const getProducts = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const pathWithCategory = parsedUrl.path;
  const categoryQuery = querystring.parse(pathWithCategory);
  const categoryStr = Object.values(categoryQuery)[0];
  const category = categoryStr.slice(1, categoryStr.length - 1);

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = JSON.parse(data);

    const products = allProducts.filter(el => {
      return el.categories.find(elem => elem === category);
    });

    if (products.length === 0) {
      res = {
        "status": "no products",
        "products": []
      };
    } else {
      res = {
        "status": "success",
        "products": products
      };
    }

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(res));
    response.end();
  });
};

module.exports = getProducts;
