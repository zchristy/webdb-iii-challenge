
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Web19'},
        {name: 'Web17'},
        {name: 'Web16'}
      ]);
    });
};
