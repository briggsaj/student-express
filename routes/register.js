const express = require('express')
const router = express.Router()
const app = express()

app.post('/', function (req, res){
    if(req.body.username != undefined && req.body.ID != undefined){
        res.status(201).send("Successfully registerd.")
    } else {
        res.status(400).send("Error: Please submit a unsername and id.")
    }
    })

    module.exports = router