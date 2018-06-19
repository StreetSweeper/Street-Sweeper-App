const router = require('express').Router()
const {Post} = require('../db/models')
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

const findDistance = (cord1, cord2) => {
  return Math.sqrt(
    (cord1._lat - cord2._lat) ** 2 + (cord1._long - cord2._long) ** 2
  );
};
const halfMile = 1 / 69 / 2;

router.get('/location', (req, res, next) => {
  const lat = req.body.lat
  const long = req.body.long
  Post.findAll({
    where: {
      latitude: {
        $contains: [lat - halfMile, lat + halfMile]
      },
      longitude: {
        $contains: [long - halfMile, long + halfMile]
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
