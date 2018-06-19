const router = require('express').Router()
const {Post} = require('../db/models')
const mile = 1 / 69
module.exports = router

router.get('/critical', (req, res, next) => {
  Post.findAll({
    where: {
      isCritical: true,
    }
  })
    .then(posts => res.json(posts))
    .catch(next)
})

router.put('/location', (req, res, next) => {
  const lat = req.body.lat
  const long = req.body.long
  Post.findAll({
    where: {
      latitude: {
        $lt:  lat + mile,
        $gt: lat - mile
      },
      longitude: {
        $lt: long + mile,
        $gt: long - mile
      },
    }
  })
    .then(locations => res.json(locations))
    .catch(next)
})

router.get('/category/:type', (req, res, next) => {
  Post.findAll({
    where: {
      category: req.params.type,
    }
  })
    .then(locations => res.json(locations))
    .catch(next)
})
