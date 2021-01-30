exports.routes = ()=>{
   return `const router = require('express').Router()

const { getAll,
     addItem,
     deletItem,
     deletAllItems,
     getOne,
     updateItem } = require('../controllers/Item.controllers')



/// * ------------------------- Item Route

/* ! @Route  : GET => api/item
     Desc    : Get all Items 
     @Access : Pubic
*/
router.get('/', getAll)

/* ! @Route  : GET => api/item/:id
     Desc    : Get One  item
     @Access : Pubic
*/
router.get('/:id', getOne)

/* ! @Route  : POST => api/item
     Desc    : Create Item
     @Access : Pubic
*/

router.post('/additem', addItem)

/* ! @Route  : POST => api/item/id
     Desc    : Delete One Item
     @Access : Pubic
*/
router.delete('/:id', deletItem)

/* ! @Route  : DELETE => api/item/
     Desc    : Delete All items
     @Access : Pubic
*/
router.delete('/', deletAllItems)

/* ! @Route  : UPDATE => api/item/:id
     Desc    : UPDATE  item
     @Access : Pubic
*/
router.put('/:id', updateItem)



module.exports = router;`
}