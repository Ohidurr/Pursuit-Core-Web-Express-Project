const express = require('express')
const cors = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000;
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())





app.listen(port,() => {
    console.log('listening on port: ', port)
})