const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/closets', require('./closets'))
router.use('/categories', require('./categories'))
router.use('/links', require('./links'))
router.use('/places', require('./places'))
router.use('/brands', require('./brands'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
