const express = require('express')
const router = express.Router()
const db = require('../../database')

router.get('/', async (req, res, next) => {
  try {
    let results = await db.all()
    res.json(results)
  } catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    let results = await db.one(req.params.id)
    res.json(results)
  } catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
})

module.exports = router
