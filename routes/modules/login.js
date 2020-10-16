const express = require('express')
const bodyParser = require('body-parser')
const Info = require('../../models/info')
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  res.redirect('/login')
})

router.get('/login', (req, res) => {
  const fail = req.query.fail
  return res.render('login', { fail })
})

router.post('/login', (req, res) => {
  // console.log(req.body)
  const email = req.body.email
  const password = req.body.password

  // database authentication
  return Info.find({ email, password })
    .lean()
    .then(user => {
      user.forEach(u => console.log('>>' + u))
      if (user.length != 0) {
        const name = user[0].firstName
        console.log('pass!')
        res.redirect(`/index?name=${name}`)
      } else {
        console.log('fail!')
        res.redirect('/login?fail=true')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router