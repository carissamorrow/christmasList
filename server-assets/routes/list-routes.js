const router = require('express').Router()
let List = require('../models/list')


router.get('/', (req, res, next) => {
  console.log("merry christmas")
  next()
})


router.get('/', (req, res, next) => {

  List.find({})
    .then(lists => {
      res.send(lists)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


router.get('/:id', (req, res, next) => {
  List.findById(req.params.id)
    .then(list => {
      res.send(list)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


router.post('/', (req, res, next) => {
  List.create(req.body)
    .then(list => {
      res.send(list)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


router.put('/:id', (req, res, next) => {
  List.findByIdAndUpdate(req.params.listId, req.body, { new: true })
    .then(list => {
      res.send(list)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})



router.delete('/:id', (req, res, next) => {
  List.findByIdAndDelete(req.params.id)
    .then(deletedList => {
      res.send('Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


module.exports = router