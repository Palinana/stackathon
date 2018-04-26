const Sequelize = require('sequelize')
const db = require('../db')

//this is our 'Order' for a user
const Closet = db.define('closet', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
            notEmpty: true
    }
  },
  model: {
    type: Sequelize.TEXT
  }

})

module.exports = Closet;
