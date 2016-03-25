var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
app.use(cors())
app.use(bodyParser.json())

var workers = require('./workers.json')

app.get('/workers', function (req, res) {
  res.json(workers)
})

app.listen(3000, function () {
  console.log('Escuchando en localhost:3000')
})
