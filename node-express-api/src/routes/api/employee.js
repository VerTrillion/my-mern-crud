const router = require('express').Router()
const controller = require('../../controllers/employee.controller')

router.get('/', controller.onGetAll)
router.get('/:id', controller.onGetById)
router.post('/', controller.onInsert)
router.put('/:id', controller.onUpdate)
router.delete('/:id', controller.onDelete)

module.exports = router