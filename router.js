const express = require('express')
const route = express.Router()
const { poster, getAll } = require('./controller')


route.post("/post", poster)
route.get("/get", getAll)

module.exports = route