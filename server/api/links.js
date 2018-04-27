const router = require('express').Router()
const {Links, Brand} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    console.log('got to the api route')
    Links.findAll()
    .then(links => res.send(links))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    Links.findById(req.params.id)
    .then(link => res.send(link))
    .catch(next)
})