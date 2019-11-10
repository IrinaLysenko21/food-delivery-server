const url = require('url');
const fs = require("fs");
const path = require('path');

const getProducts = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const pathWithCategory = parsedUrl.path;

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = JSON.parse(data);
    const reg = /%27[\D]*%27/;
    const reg_2 = /%27/g;
    const match = pathWithCategory.match(reg);
    const category = match[0].replace(reg_2, '');

    const products = [];

    allProducts.filter(el => {
      el.categories.map(elem => elem === category ? products.push(el) : null);
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
