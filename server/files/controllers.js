exports.controllers = ()=>{
  return `///* -------------------------------------------------------------------------- Item Controllers
// -------------require models----------  //
const Item = require('../models/Item.model')

// -------------require validations----------  //
const { itemValidation } = require('../validations/Item.validations')

// ------------- require mongoose ObjectId ----//
const ObjectID = require('mongoose').Types.ObjectId;

/* ! @Route  : GET => api/items
     Desc    : Get all Items
     @Access : Pubic
*/
exports.getAll = async (req, res) => {
  try {
    const all = await Item.find().sort({ date: -1 })
    all && res.status(200).json(all)
  } catch (error) {
    res.status(400).json(err)
  }
}

/* ! @Route  : GET => api/item/:id
     Desc    : Get One  item
     @Access : Pubic
*/
exports.getOne = async (req, res) => {
  !ObjectID.isValid(req.params.id)
    && res.status(404).json({ message: "l'ID " +req.params.id"+ n'est pas reconnu" })
  Item.findById(req.params.id, (err, info) => {
    !err
      ? res.status(200).json(info)
      : res.status(400).json({ err })
  })
}


/* ! @Route  : POST => api/items/additem
     Desc    : Create Item
     @Access : Pubic
*/
exports.addItem = async (req, res) => {
  const { error } = itemValidation(req.body)
  error && res.status(400).json(error.details[0].message)
  const item = new Item({ ...req.body })
  try {
    const addItem = await item.save()
    addItem && res.status(201).json(item)
  } catch (error) {
    res.status(400).json(err)
  }
}
/* ! @Route  : DELETE => api/items/:id
     Desc    : Delete Item
     @Access : Pubic
*/
exports.deletItem = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    res.status(400).json({ message: "l'ID " +req.params.id+ " n'est pas reconnu" })
  try {
   await Item.remove({_id:req.params.id}).exec()
   res.status(200).json({message: "l'item avec l'id "+req.params.id+" est supprimer avec succées"})
  } catch (error) {
    res.status(500).json({ error })
  }
}
/* ! @Route  : DELETE => api/item/
     Desc    : Delete All items
     @Access : Pubic
*/

exports.deletAllItems = async (req, res) => {
  try {
    const deletMany = await Item.deleteMany()
    deletMany && res.status(200).json({ message: "0 element veiller rajouter un element a la todo liste" })
  } catch (error) {
    res.status(500).json({ error })
  }
}
/* ! @Route  : UPDATE => api/item/:id
     Desc    : Update item
     @Access : Pubic
*/

exports.updateItem = async (req, res) => {
  !ObjectID.isValid(req.params.id)
    && res.status(404).json({ message: "l'ID "+req.params.id+" n'est pas reconnu" })
  const { error } = itemValidation(req.body)
  error
    && res.status(400).json(error.details[0].message)
  try {
    await Item.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true,useFindAndModify:true,upsert:true },
      (err, info) => {
        !err
          ? res.status(200).json(info)
          : res.status(400).json({ err })
      })
  } catch (err) {
    res.status(400).json({ err })
  }
}
`
}