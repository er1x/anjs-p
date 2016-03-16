var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var usuarios = [
  {name: 'Thor', id: 1},
  {name: 'Hulk', id: 2},
  {name: 'Iron Man', id: 3}
]

// Métodos de la API

app.get('/', function (req, res) {
  res.send('prueba')
})

app.get('/usuarios', function (req, res) {
  res.json(usuarios)
})

app.post('/usuarios/add', function (req, res) {
  usuarios.push({
    name: req.body.name,
    id: usuarios.length + 1
  })
  res.sendStatus(201)
})

// Fin Métodos

app.listen(3000, function () {
  console.log('Escuchando en localhost:3000')
})
