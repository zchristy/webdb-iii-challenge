const express = require('express');

const db = require('../data/cohorts-model.js')

const router = express.Router();

router.post('/', (req, res) => {
  db.add(req.body)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/', (req, res) => {
  db.find()
  .then(cohorts => {
    res.status(200).json(cohorts)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
  .then(cohort => {
    res.status(200).json(cohort)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id/students', (req, res) => {
  db.findStudentsById(req.params.id)
  .then(students => {
    res.status(200).json(students)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router