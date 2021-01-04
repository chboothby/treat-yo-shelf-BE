const { userData, bookData } = require("../data/index.js");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => {
      return knex.migrate.latest();
    })
    .then(() => {
      return knex.insert(userData).into("users").returning("*");
    })
    .then((userRows) => {
      console.log(userRows);
      return knex.insert(bookData).into("books").returning("*");
    })
    .then((bookRows) => {
      console.log(bookRows);
    });
};