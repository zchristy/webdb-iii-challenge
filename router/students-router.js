const express = require('express');

const db = require('../data/students-model.js')

const mw = require('../middleware/middleware.js')

const router = express.Router();

router.post('/', mw.validateStudent, (req, res) => {
  db.add(req.student)
  .then(id => {
    res.status(200).json(id)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/', (req, res) => {
  db.find()
  .then(students => {
    res.status(200).json(students)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', mw.validateStudentId, (req, res) => {
  db.findById(req.studentId)
  .then(student => {
    res.status(200).json(student)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', mw.validateStudentId, mw.validateStudent, (req, res) => {
  db.update(req.studentId, req.student)
  .then(student => {
    res.status(200).json(student)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', mw.validateStudentId, (req, res) => {
  db.remove(req.studentId)
  .then(student => {
    res.status(200).json({message: "Student succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router
