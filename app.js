const express = require('express')
const app = express()
//express.use(express.json())
app.use(express.json())

app.set('port', process.env.port || 8080 )

const studentsRouter = require('./routes/students')

const gradesRouter = require('./routes/grades')

const registerRouter = require('./routes/register')

app.use('/students', studentsRouter)

app.use('/grades', gradesRouter)

app.use('/register', registerRouter)

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`))

module.exports = app