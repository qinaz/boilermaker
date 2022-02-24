const db = require('./db')
const User = require('./User')
const Puppy = require('./Puppy')
const Kitten = require('./Kitten')

User.hasMany(Puppy)
Puppy.belongsTo(User)

User.hasMany(Kitten)
Kitten.belongsTo(User)


module.exports = {
  db,
  User,
  Puppy,
  Kitten
}