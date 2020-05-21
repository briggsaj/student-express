const express = require('express')
const app = express
//express.use(express.json())
app.use(express.json())

app.set('port', process.env.port || 8080 )

const studentRouter = require('./routes/students')

app.use('/students', studentsRouter)

app.use('/grades', gradesRouter)

app.use('/register', registerRouter)

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`))

