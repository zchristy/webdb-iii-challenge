const express = require('express');

const db = require('../data/cohorts-model.js')

const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', mw.validateCohort, (req, res) => {
  db.add(req.cohort)
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

router.get('/:id', mw.validateCohortId, (req, res) => {
  db.findById(req.cohortId)
  .then(cohort => {
    res.status(200).json(cohort)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id/students', mw.validateCohortId, (req, res) => {
  db.findStudentsById(req.cohortId)
  .then(students => {
    res.status(200).json(students)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', mw.validateCohortId, mw.validateCohort, (req, res) => {
  db.update(req.cohortId, req.cohort)
  .then(cohort => {
    res.status(200).json(cohort)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', mw.validateCohortId, (req, res) => {
  db.remove(req.cohortId)
  .then(cohort => {
    res.status(200).json({message: "Cohort succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router
