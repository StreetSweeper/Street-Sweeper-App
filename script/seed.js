'use strict'

const db = require('../server/db')
const {User, Post} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const posts = await Promise.all([
    Post.create({upvote: '-12', text: 'The sun is too bright', latitude: 100.32, longitude: 55.89, isCritical: false, category: 'scenery'}),
    Post.create({upvote: '3', text: 'Pothole!', latitude: 120.32, longitude: 15.89, isCritical: false, category: 'roadwork'}),
    Post.create({upvote: '5', text: 'My house is on fire', latitude: -45.34, longitude: -55.89, isCritical: true, category: 'housing'})
  ])

  console.log(`seeded ${posts.length} postsjcsdknjksn`)
  console.log(`seeded succsduicdbiucbebdlewjessfully`)
}

if (module === require.main) {
  seed()
    .then(() => {
      console.log('closing db connection')
      db.close()
      console.log('db connection closed')
    })
    .catch(err => {
      console.error(err)
      process.exitCode = 1
    })
  console.log('seeding...')
}

module.exports = seed
