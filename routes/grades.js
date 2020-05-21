const express = require('express')
const router = express.Router()

const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))

router.post('/', (req, res) => {
    if(req.body.grade != undefined && req.body.studendId != undefined){
        res.status(201).send("Successfully added grade.")
    } else{
        res.status(400).send("Need grade and studentId")
    }
})


module.exports = router