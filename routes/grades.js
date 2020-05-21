const express = require('express')
const router = express.Router()
const app = express()

const fs = require('fs')

router.get('/', (req, res) => res.send(grades))
router.get('/:id', (req, res) => {
  const selectedGrades = grades.find(grades => student.id === Number(req.params.ID))
  res.send(selectedGrades)
})

app.post('/', function (req, res){
    if(req.body.grade != undefined && req.body.student != undefined){
        res.status(201).send("Successfully added a grade.")
    } else {
        res.status(400).send("Error: Please send a grade and student id.")
    }
    })

module.exports = router