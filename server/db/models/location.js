const Sequelize = require('sequelize')
const db = require('../db')

const Location = db.define('location', {
    latitude: {
        type: Sequelize.FLOAT,
    },
    longitude:{
        type: Sequelize.FLOAT,
    }
})

module.exports = Location;