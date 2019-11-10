const url = require('url');
const fs = require("fs");
const path = require('path');

const getProducts = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const pathWithIds = parsedUrl.path;

  const filePath = path.join(__dirname, '../../', 'db/', 'products', 'all_products.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allProducts = JSON.parse(data);

    const reg = /\d{8}/g;
    const match = pathWithIds.match(reg);
    const products = [];

    match.map(el => {
      const product = allProducts.find(elem => elem.id === Number(el));
      products.push(product);
    });

    res = {
      "status": "success",
      "products": products
    };

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(res));
    response.end();
  });
};

module.exports = getProducts;

