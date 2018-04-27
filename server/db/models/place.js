const Sequelize = require('sequelize')
const db = require('../db')

const Place = db.define('place', {
    latitude: {
        type: Sequelize.FLOAT,
    },
    longitude:{
        type: Sequelize.FLOAT,
    }
})

module.exports = Place;