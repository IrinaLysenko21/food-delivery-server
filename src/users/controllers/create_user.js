const fs = require('fs');
const path = require('path');
const dataParser = require('../../helpers/dataParser');

const saveUser = userString => {
  const user = dataParser(userString);

  const pathToUserFolder = path.join(__dirname, '../../', 'db/', 'users/', `${user.username}`);
  const pathToUserFile = path.join(pathToUserFolder, `${user.username}.json`);

  fs.mkdir(pathToUserFolder, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.writeFile(pathToUserFile, userString, function (err) {
    if (err) throw err;
  });

  return user;
};

const signUpRoute = (request, response) => {
  if (request.method === 'POST') {
    const user = request.body;

    if (user && user.username && user.password && user.telephone && user.email) {

      const userWithId = {
        ...user,
        id: Date.now()
      };

      const filePath = path.join(__dirname, '../../', 'db/', 'users', 'all_users.json');

      fs.readFile(filePath, function (err, data) {
        if (err) {
            return console.error(err);
        }

        const allUsers = dataParser(data);
        allUsers.push(userWithId);

        fs.writeFile(filePath, JSON.stringify(allUsers), function (err) {
          if (err) throw err;
        });
      });

      saveUser(JSON.stringify(userWithId));

      const res = {
        status: 'success',
        user: userWithId
      };

      response.status(201).json(res);
    } else {
      res.status(400).send('Bad Request');
    }
  }
};

module.exports = signUpRoute;
