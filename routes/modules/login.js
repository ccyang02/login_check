const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.redirect('/login')
})

router.get('/login', (req, res) => {
  return res.render('login')
})

router.post('/login', (req, res) => {
  // console.log(req.body)
  const usr = req.body.username
  const pswd = req.body.password

  // database authentication

})

module.exports = router