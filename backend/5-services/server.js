var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var _ = require('lodash')

var app = express()
app.use(cors())
app.use(bodyParser.json())

var workers = require('./workers.json')

app.get('/workers', function (req, res) {
  // throw Exception('asdasd')
  var page = (req.query.page - 1) || 0
  var pageSize = 10
  res.json({
    totalWorkers: Math.ceil(workers.length),
    workers: workers.slice(page * pageSize, (page * pageSize) + pageSize)
  })
})

app.post('/workers/add', function (req, res) {
  var worker = req.body
  workers.push({
    code: (parseInt((Math.random(0, 1000) * 1000), 0)).toString(),
    name: worker.name,
    job: worker.job,
    date: (new Date()).toISOString(),
    surname: worker.surname || '',
    department: worker.department || '',
    salary: worker.salary || '',
    photo: worker.photo || ''
  })
  res.sendStatus(201)
})

app.get('/workers/:id', function (req, res) {
  setTimeout(function () {
    res.json(_.find(workers, {code: req.params.id}))
  }, 2000)
})

app.listen(3000, function () {
  console.log('Escuchando en localhost:3000')
})
