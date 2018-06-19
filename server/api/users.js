const router = require('express').Router()
const {User} = require('../db/models')
const { isSelf } = require('../permissions')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {

  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})


router.get('/:id', isSelf, (req, res, next) => {
  res.json(req.requestedUser);
});

router.put('/:id', isSelf, asyncHandler(async (req, res, next) => {
    const response = await User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.json(response[1][0])
  })
);
