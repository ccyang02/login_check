const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(routes)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(port, () => {
  console.log(`My login page is listening on port ${port}.`)
})