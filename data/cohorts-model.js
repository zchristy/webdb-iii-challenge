const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  findStudentsById,
  add,
  remove,
  update
};

function find() {
  return db('cohorts')
}

function findById(id) {
  return db('cohorts')
    .where({ id })
    .first();
}

function findStudentsById(id) {
  return db('students')
  .join('cohorts', 'students.cohorts_id', 'cohorts.id')
  .select('cohorts.id', 'cohorts.name', 'students.id', 'students.name')
  .where({ cohorts_id: id })
}

function add(cohort) {
  return db('cohorts')
  .insert(cohort, 'id')
}

function remove(id) {
  return db('cohorts')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('cohorts')
    .where({ id })
    .update(changes, '*');
}
