const express = require('express')
const Cars = require('./cars-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try{
    const cars = await Cars.getAll()
    res.status(200).json(cars)
  } catch (err) {
    next(err)
  }
})


router.get('/:id', async (req, res) => {
  res.status(200).json('GET is CONNECTED! set it up!')
})

router.post('/', async (req, res) => {
  res.status(200).json('GET is CONNECTED! set it up!')
})


module.exports = router