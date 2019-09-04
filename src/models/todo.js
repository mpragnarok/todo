// Create Todo model
const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
  name: {
    type: String,
    required: true
  }
})

module.exports = Todo