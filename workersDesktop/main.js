'use strict'

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready', function () {
  mainWindow = new BrowserWindow()
  mainWindow.setMenu(null)
  mainWindow.maximize()
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
})