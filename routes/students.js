const express = require('express')
const router = express.Router()

const fs = require('fs')

router.get('/', (req, res) => res.send(students))
router.get('/:id', (req, res) => {
  const selectedStudent = students.find(student => student.id === Number(req.params.ID))
  res.send(selectedStudent)
})



module.exports = router