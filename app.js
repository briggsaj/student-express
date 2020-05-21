const express = require('express')
const app = express()

app.use(express.json())
app.set('port', process.env.port || 8000)

app.use('/students', studentsRouter)
app.get('/', (req, res) => {
  res.send('welcome to the app')
})

const studentsRouter = require('./routes/students')
app.use('/students', studentsRouter)

const gradesRouter = require('./routes/grades')
app.use('/grades', gradesRouter)

const registerRouter = require('./routes/register')
app.use('/register', registerRouter)

app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}`))

module.exports = app