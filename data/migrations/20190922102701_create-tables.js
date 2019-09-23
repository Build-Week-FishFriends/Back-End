
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl
            .string('username', 128)
            .notNullable()
            .unique();
        tbl.string('password', 300).notNullable();
        tbl.string('firstName', 255).notNullable();
        tbl.string('lastName', 255).notNullable();
        tbl.string('email', 255)
    })
    .createTable('water-bodies', tbl => {
        tbl.increments();
        tbl.string('facilityName', 255).notNullable();
        tbl.float('latitude').notNullable();
        tbl.float('longitude').notNullable();
        tbl.string('directions') 
    })
    .createTable('fish-types', tbl => {
        tbl.increments();
        tbl.string('fishName', 255).unique()
    })
    .createTable('logs', tbl => {
        tbl.increments();
        tbl.string('baitType', 255);
        tbl.integer('waterBodyId')
            .notNullable()
            .unsigned() 
            .references('id') 
            .inTable('water-bodies')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE') 
        tbl.integer('fishId') 
            .notNullable() 
            .unsigned() 
            .references('id')
            .inTable('fish-types')
            .onDelete('CASCADE') 
            .onUpdate('CASCADE')
        tbl.integer('fishCount', 155)
        tbl.integer('userId') 
            .notNullable() 
            .unsigned() 
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('timeSpent', 155)
        tbl.datetime('timeOfDay')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('logs')
    .dropTableIfExists('fish-types')
    .dropTableIfExists('water-bodies')
    .dropTableIfExists('users')
};
