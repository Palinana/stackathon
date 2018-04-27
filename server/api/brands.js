const router = require('express').Router()
const {Brand, Category} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    console.log('got to the api route')
   Brand.findAll({include: [{all: true}]})
    .then(brands => res.send(brands))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    Brand.findById(req.params.id)
    .then(brand => res.send(brand))
    .catch(next)
})

