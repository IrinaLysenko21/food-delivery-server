const fs = require('fs');
const path = require('path');

const saveUser = userString => {
  const user = JSON.parse(userString);

  const pathToUser = path.join(__dirname, '../../', 'db/', 'users/', `${user.username}.json`);

  console.log(fs.writeFile(pathToUser, userString, function (err) {
    if (err) throw err;
  }));

  return user;
};

const sendResponse = (response, user) => {
  const res = {
    "status": "success",
    "user": user
  };

  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(JSON.stringify(res));
  response.end();
};

const signUpRoute = (request, response) => {
  let body = '';

  if (request.method === 'POST') {

    request
    .on('data', function (data) {
      body = body + data;
    })
    .on('end', function () {
      const user = saveUser(body);
      sendResponse(response, user);
    });
  }
};

module.exports = signUpRoute;