
exports.seed = function(knex) {
      return knex('users').insert([
        {"username": "mason2", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "mason3", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "mason4", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "mason5", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "keith2", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
      ]);
};
