exports.server = `require("dotenv").config({ path: "./config/.env" })

const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const itemRoutes = require('./routes/Item.route')

const app = express()

//* ------------------------------------ BODY PARSER MIDDLEWEAR

app.use(bodyParser.json())

//*------------------------------------ Db CONNECT

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // seUnifiedTopology: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongo Db Connected"))
  .catch(err => console.log("error connection to the DB :" +err))

//* -------------------------------------Use Routes 

app.use('/api/items', itemRoutes)

//* ---- ---------------------------------Port APP
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("app Listning on Port :" +PORT))`


exports.env = `#mongo_uri
MONGO_URI =`


exports.controller =  `///* ------------------------- Item Model

const Item = require('../models/items.model')

/* ! @Route  : GET => api/item
     Desc    : Get all Items
     @Access : Pubic
*/
exports.getAll = async (req, res) => {
  //! .sort date:-1 pour avoir la DB en ordre decroissant
  try {
    const all = await Item.find().sort({ date: -1 })
    all && res.status(200).json(all)
  } catch (error) {
    res.status(400).json(err)
  }
}


/* ! @Route  : POST => api/item
     Desc    : Create Item
     @Access : Pubic
*/
exports.addItem = async (req, res) => {
  const item = new Item({
    ...req.body
  })
  try {
    const addItem = await item.save()
    addItem && res.status(201).json(item)
  } catch (error) {
    res.status(400).json(err)
  }
  // item
  //   .save()
  //   .then(() => res.status(201).json(item))
  //   .catch((err) => res.status(400).json(err))
}
/* ! @Route  : DELETE => api/item/id
     Desc    : Delete Item
     @Access : Pubic
*/
exports.deletItem = async (req, res) => {
  const { id } = req.params
  try {
    const deletItem = await Item.findById(id)
    if (deletItem) {
      await deletItem.remove()
      res.json({ message: "l'itém avec le nom " +deletItem.name+" est supprimer avec succée" })
    }
  } catch (error) {
    res.status(500).json({ error })
  }
}`
exports.model = `const mongoose = require('mongoose');
const Schema = mongoose.Schema
//* create a Item Scheme
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoose.model('Item', ItemSchema)`

exports.routes =  `const express = require('express');
const router = express.Router()
const { getAll, addItem, deletItem } = require('../controllers/Item.controller')



/// * ------------------------- Item Route

/* ! @Route  : GET => api/item
     Desc    : Get all Items 
     @Access : Pubic
*/
router.get('/', getAll)

/* ! @Route  : POST => api/item
     Desc    : Create Item
     @Access : Pubic
*/
router.post('/', addItem)

/* ! @Route  : POST => api/item/id
     Desc    : Create Item
     @Access : Pubic
*/
router.delete('/:id', deletItem)


module.exports = router;`