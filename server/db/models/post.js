const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  upvote: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  text: {
    type: Sequelize.TEXT
  },
  latitude: {
    type: Sequelize.FLOAT,
    //allowNull: false
  },
  longitude: {
    type: Sequelize.FLOAT,
    //allowNull: false
  },
  category: {
    type: Sequelize.STRING
  },
  isCritical: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Post
