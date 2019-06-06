
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', (tbl) => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // a varchar called name, 128, unique, not null
    tbl.string('name', 128).notNullable().unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts')
};
