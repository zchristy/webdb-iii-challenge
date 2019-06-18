// new changes to the database schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', tbl => {
    //primarykey called id, autoincrements, integer
    tbl.increments()

    // a varchar called name, 128, unique, not null
    tbl.string('name', 128).notNullable().unique()

    tbl.integer('cohorts_id').unsigned().notNullable()
    tbl.foreign('cohorts_id').references('cohorts.id').onDelete('CASCADE').onUpdate('CASCADE')
  })
};

// how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
