const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.status(200).json('GET is CONNECTED! set it up!')
})


router.get('/:id', async (req, res) => {
  res.status(200).json('GET is CONNECTED! set it up!')
})

router.post('/', async (req, res) => {
  res.status(200).json('GET is CONNECTED! set it up!')
})


module.exports = router