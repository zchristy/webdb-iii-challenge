
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Jay',
          cohorts_id: 2
        },
        {
          name: 'Bazen',
          cohorts_id: 2
        },
        {
          name: 'Zach',
          cohorts_id: 3
        },
        {
          name: 'Luis',
          cohorts_id: 1
        },
        {
          name: 'Dustin',
          cohorts_id: 1
        },
        {
          name: 'Josh',
          cohorts_id: 3
        }
      ]);
    });
};
