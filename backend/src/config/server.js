const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('cors')
const port = process.env.PORT || 6789;

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors({origin: '*'}));
server.set('secret', 'opensecret');

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server