exports.model = (modelName)=>{
  return `const mongoose = require('mongoose');
const Schema = mongoose.Schema
//* create a ${modelName} Scheme
const ${modelName}Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  validation: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = ${modelName} = mongoose.model('${modelName}', ${modelName}Schema)`
}