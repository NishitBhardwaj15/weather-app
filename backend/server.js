const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.PORT

app.use('/',require(path.join(__dirname,'routes/api.js')))
app.use('/api',require(path.join(__dirname,'routes/api.js')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})