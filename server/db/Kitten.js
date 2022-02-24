const Sequelize = require('sequelize')
const db = require('./db')

const Kitten = db.define('kitten', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: Sequelize.INTEGER,
  Species: Sequelize.STRING,
  ownername: Sequelize.STRING
})

module.exports = Kitten