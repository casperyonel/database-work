require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
// const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')
// npm i sequelize?? / 

app.use(express.json())
app.use(cors())

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))