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


router.get('/:id', async (req, res, next) => {
  try {

    const {id} = req.params
    const getCarById = await Cars.getById(id)

    if(!getCarById) {
      res.status(404).json({message: `Car not found with the id : ${id}`})
    } else {
      res.status(200).json(getCarById)
    }

  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res) => {
  res.status(200).json('GET is CONNECTED! set it up!')
})


module.exports = router