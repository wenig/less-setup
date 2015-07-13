exports.up = function (knex) {
  return knex.schema
    .createTable('Person', function (table) {
      table.bigincrements('id').primary();
      table.string('firstName');
      table.string('lastName');
      table.integer('age');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Person');
};