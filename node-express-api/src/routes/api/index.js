const router = require('express').Router()

router.use('/employees', require('./employee'))

module.exports = router