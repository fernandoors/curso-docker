const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')


//Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//Teste
server.get('/', (requestAnimationFrame, res, next) => res.send('Backend'))

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators:true})

Client.register(server, '/clients')
//Start Server
server.listen(3000)