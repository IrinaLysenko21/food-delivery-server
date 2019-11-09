const url = require('url');
// console.log(url);
const getId = url => {
  const lastIndex = url.lastIndexOf('/');

  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const getProduct = (request, response) => {
  // console.log(request.url);
  
  const parsedUrl = url.parse(request.url);
  // console.log(parsedUrl);
  
  const id = getId(parsedUrl.path);
  // console.log(id);
  // console.log('hello');
  
  

  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(JSON.stringify({ productid: id }));
  response.end();
};

module.exports = getProduct;