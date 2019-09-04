const mongoose = require('mongoose')
const db = mongoose.connection

// connect to mongodb with mongoose
mongoose.connect('https://127.0.0.1:27017/todo', {
  uesNewUrlParser: true,
  useCreateIndex: true
})

// connect error
db.on('error', () => {
  console.log('mongodb error!')
})

// connect successful
db.once('open', () => {
  console.log('mongodb connected!')
})