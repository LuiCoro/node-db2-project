const express = require('express')
const Cars = require('./cars-model')
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
} = require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const cars = await Cars.getAll()
    res.status(200).json(cars)
  } catch (err) {
    next(err)
  }
})


router.get('/:id', checkCarId,  async (req, res, next) => {
res.json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
  res.status(200).json('Added new car!')
})


module.exports = router