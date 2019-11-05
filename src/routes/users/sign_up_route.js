const fs = require('fs');
const path = require('path');

const saveUser = userString => {
  const user = JSON.parse(userString);

  const pathToUser = path.join(__dirname, '../../', 'db/', 'users/', `${user.username}.json`);

  fs.writeFile(pathToUser, userString, function (err) {
    if (err) throw err;
  });

  return user;
};

const signUpRoute = async (request, response) => {
  let body = '';

  if (request.method === 'POST') {
    await request
    .on('data', function (data) {
      body = body + data;
    });

    const user = JSON.parse(body);

    if (user && user.username && user.password && user.telephone && user.email) {
      saveUser(body);

      const res = {
        "status": "success",
        "user": user
      };

      response.writeHead(201, {"Content-Type": "application/json"});
      response.write(JSON.stringify(res));
      response.end();
    } else {
      response.writeHead(400, {"Content-Type": "text/plain"});
      response.write("Bad Request");
      response.end();
    }
  }
};

module.exports = signUpRoute;