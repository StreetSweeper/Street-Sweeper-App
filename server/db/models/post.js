const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  upvote: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  postText: {
    type: Sequelize.TEXT
  },
  latitude: {
    type: Sequelize.DOUBLE,
    //allowNull: false
  },
  longitude: {
    type: Sequelize.DOUBLE,
    //allowNull: false

  },
  isCritical: {
    type: Sequelize.BOOLEAN,
    defaultValue: false

  }
})

module.exports = Post
