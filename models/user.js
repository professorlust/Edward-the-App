const bcrypt = require('bcryptjs')

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [3, 100]
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [11, 150]
      }
    }
  }, {
    instanceMethods: {
      isCorrectPassword (attempt) {
        return bcrypt.compare(attempt, this.password)
      }
    }
  })

  User.beforeCreate((user, options) => {
    return getHash(user.password).then(hash => {
      user.password = hash
    }).catch(err => {
      console.log(err)
    })
  })

  return User
}

function getHash (password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err)
        return
      }

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err)
          return
        }

        resolve(hash)
        return
      })
    })
  })
}
