const express = require('express');

const db = require('../data/students-model.js')

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
  .then(students => {
    res.status(200).json(students)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  db.findById(req.params.id)
  .then(student => {
    res.status(200).json(student)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  db.update(req.params.id, req.body)
  .then(student => {
    res.status(200).json(student)
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
  .then(student => {
    res.status(200).json({message: "Student succesfully Deleted"})
  })
  .catch(err => {
    res.status(500).json(err)
  })
});

module.exports = router
