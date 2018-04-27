const router = require('express').Router()
const {Link, Brand} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    console.log('got to the api route')
    Link.findAll()
    .then(links => res.send(links))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    Link.findById(req.params.id)
    .then(link => res.send(link))
    .catch(next)
})