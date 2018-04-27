const router = require('express').Router()
const {Place, Brand} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    console.log('got to the api route')
   Place.findAll()
    .then(places => res.send(places))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    Place.findById(req.params.id)
    .catch(next)
})