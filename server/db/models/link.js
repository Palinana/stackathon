const Sequelize = require('sequelize')
const db = require('../db')

const Link = db.define('link', {
    link: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Link