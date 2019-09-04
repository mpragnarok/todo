const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.PORT || 3000
const Todo = require('./src/models/todo')


// set route
app.get('/', (req, res) => {
  res.send('Hey!')
})

// listen to port on Express server
app.listen(port, () => {
  console.log(`The server is running on port: ${port}`)
})