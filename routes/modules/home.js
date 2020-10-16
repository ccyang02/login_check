const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/index', (req, res) => {
  const name = req.query.name
  return res.render('index', { name })
})

module.exports = router