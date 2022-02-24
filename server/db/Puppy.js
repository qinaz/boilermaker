const Sequelize = require('sequelize')
const db = require('./db')

const Puppy = db.define('puppy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: Sequelize.INTEGER,
  Species: Sequelize.STRING,
  ownername: Sequelize.STRING
})

module.exports = Puppy