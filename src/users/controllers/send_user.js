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

const getUser = (request, response) => {
  const parsedUrl = url.parse(request.url);
  const id = getId(parsedUrl.path);

  const filePath = path.join(__dirname, '../../', 'db/', 'users', 'all_users.json');

  fs.readFile(filePath, function (err, data) {
    if (err) {
        return console.error(err);
    }

    const allUsers = dataParser(data);

    const user = allUsers.find((el) => el.id === Number(id));

    let res;
    if (user) {
      res = {
        status: 'success',
        user: [user]
      };
    } else {
      res = {
        status: 'not found'
      }
    }

    response.status(200).json(res);
  });
};

module.exports = getUser;