const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db('students')
}

function findById(id) {
  console.log(id)
    return db('students')
    .join('cohorts', 'students.cohorts_id', 'cohorts.id')
    .select('students.id', 'students.name', 'cohorts.name as cohort')
    .where({ 'students.id': id })
    .first()
}

function add(students) {
  return db('students')
  .insert(cohort, 'id')
}

function remove(id) {
  return db('students')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('students')
    .where({ id })
    .update(changes, '*');
}
