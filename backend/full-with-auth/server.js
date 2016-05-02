var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var _ = require('lodash')
var jwt = require('jwt-simple')

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(authMiddleware)

var workers = require('./workers.json')
var sells = {
  current: 75000,
  target: 200000
}
var cfg = {
  tokenSecret: 'thisIsMyUltr4H4rdT0k3nS3cr3t_go to hell!'
}

app.post('/login', function (req, res) {
  // on a real app this will be a db query with a hashed password
  if (req.body.username === 'pepe' && req.body.password === 'pepepass') {
    res.json({
      token: jwt.encode({username: req.body.username}, cfg.tokenSecret)
    })
  } else {
    res.sendStatus(403)
  }
})

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

app.get('/sells', function (req, res) {
  res.json(sells)
})

app.listen(3000, function () {
  console.log('Escuchando en localhost:3000')
})

function authMiddleware (req, res, next) {
  function isAuthOk (token) {
    try {
      var payload = jwt.decode(token, cfg.tokenSecret)
      if (payload.username === 'pepe') {
        return true
      }
    } catch (err) {
      console.log(err)
      return false
    }
    return false
  }

  if (!req.headers.authorization) {
    if (req.path === '/login') {
      next()
    } else {
      res.sendStatus(403)
    }
  } else {
    if (req.path === '/login') {
      res.sendStatus(200)
    } else {
      if (isAuthOk(req.headers.authorization.split(' ')[1])) {
        next()
      } else {
        res.sendStatus(403)
      }
    }
  }
}

setInterval(function () {
  sells.current += 10
}, 30000)
