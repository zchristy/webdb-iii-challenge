const cohortsDb = require('../data/cohorts-model.js')
const studentsDb = require('../data/students-model.js')

module.exports = {
  validateStudentId,
  validateStudent,
  validateCohortId,
  validateCohort,
};

//custom middleware

function validateStudentId(req, res, next) {
  const { id } = req.params

    studentsDb.findById(id)
    .then(student => {
      if(student) {
        req.studentId = student.id
        next()
      } else {
        res.status(400).json({ message: "invalid student id" })
      }
    })
    .catch(err => {
      res.status(500).json({error: "bad request"})
    })

};

function validateStudent(req, res, next) {

  if(Object.keys(req.body).length) {
    if(req.body.name) {
      req.student = {
        name: req.body.name,
        cohort_id: req.body.cohort_id
      }
      next()
    } else {
      res.status(400).json({ message: "missing required field or fields" })
    }
  } else {
    res.status(400).json({ message: "missing post data" })
  }

};

function validateCohortId(req, res, next) {
  const { id } = req.params

    cohortsDb.findById(id)
    .then(cohort => {
      if(cohort) {
        req.cohortId = cohort.id
        next()
      } else {
        res.status(400).json({ message: "invalid cohort id" })
      }
    })
    .catch(err => {
      res.status(500).json({error: "bad request"})
    })

};

function validateCohort(req, res, next) {

  if(Object.keys(req.body).length) {
    if(req.body.name) {
      req.cohort = {
        name: req.body.name
      }
      next()
    } else {
      res.status(400).json({ message: "missing required name field" })
    }
  } else {
    res.status(400).json({ message: "missing post data" })
  }
};
