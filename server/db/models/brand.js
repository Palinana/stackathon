const Sequelize = require('sequelize')
const db = require('../db')
const Category = require('./category')

const Brand = db.define('brand', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

module.exports = Brand