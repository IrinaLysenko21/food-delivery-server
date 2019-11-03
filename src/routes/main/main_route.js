const mainRoute = (request, response) => {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Welcome to our website!</h1>");
  response.end();

};

module.exports = mainRoute;