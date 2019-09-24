
exports.seed = function(knex) {
      return knex('users').insert([
        {"username": "mason2", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "mason3", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "mason4", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "mason5", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "keith2", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "keith3", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "keith4", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "keith5", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "alice3", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "alice4", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "alice5", "password": "mason", "firstName": "mason", "lastName": "karsevar"},
        {"username": "alice6", "password": "mason", "firstName": "mason", "lastName": "karsevar"}
      ]);
};
