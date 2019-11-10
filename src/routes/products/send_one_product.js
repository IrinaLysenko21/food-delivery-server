const url = require('url');
const fs = require("fs");
const path = require('path');


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

    const allProducts = JSON.parse(data);
    const product = allProducts.find((el) => el.id === Number(id));

    res = {
      "status": "success",
      "products": [product]
    };

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(JSON.stringify(res));
    response.end();
  });
};

module.exports = getProduct;
