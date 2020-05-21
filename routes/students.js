const express = require('express')
const router = express.Router()

const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))

router.get('/', (req, res) => res.send(students))
router.get('/:id', (req, res) => {
  const selectedStudent = students.find(student => student.id === Number(req.params.id))
  res.send(selectedStudent)
})


module.exports = router