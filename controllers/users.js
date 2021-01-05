const { fetchUserById, postNewUser, removeUser } = require("../models/users");

exports.getUserById = (req, res, next) => {
  const { user_id } = req.params;
  fetchUserById(user_id)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch(next);
};

exports.addNewUser = (req, res, next) => {
  const newUser = req.body;
  postNewUser(newUser)
    .then((user) => {
      res.status(201).send({ user });
    })
    .catch(next);
};

exports.deleteUser = (req, res, next) => {
  const { user_id } = req.params;
  removeUser(user_id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};
