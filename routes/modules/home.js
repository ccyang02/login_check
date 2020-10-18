const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/index', (req, res) => {
  const name = req.session.middleData
  return res.render('index', { name })
})

module.exports = router