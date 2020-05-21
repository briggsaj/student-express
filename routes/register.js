const express = require('express')
const router = express.Router()

const fs = require('fs')

function nextStudentId() {
    return Math.max(...students.map(student => student.id)) + 1
}

class Student {
    constructor(id, name, username, email) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.grades = []
    }
}

const students = []

const students = JSON.parse(fs.readFileSync('students.json'))

router.post('/', (req, res) => {
    if(!req.body.username || !req.body.username || !req.body.email){
        res.status(400).send("'name', 'username', and 'email' are required in the request body")
    }
    else{
        res.status(400).send("Need username and email")
    } 

    // students.push(new Student(nextStudentId(), req.body.name, req.body.username, req.body.email))
    // res.sendStatus(200)
     })


module.exports = router