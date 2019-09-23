
exports.seed = function(knex) {
      return knex('fish-types').insert([
        {fishName: 'yellow perch'},
        {fishName: 'Walleye'},
        {fishName: 'striped bass'},
        {fishName: 'pink salmon'},
        {fishName: 'bull trout'},
        {fishName: 'columbia river redband trout'},
        {fishName: 'columbia rainbow trout'},
        {fishName: 'sockeye salmon'},
        {fishName: 'chinook salmon'},
      ]);
};
