const path = require('path')
const morgan = require('morgan')
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hds', handlebars({
  extname: '.hds'
}))

app.set('view engine', 'hds')
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})