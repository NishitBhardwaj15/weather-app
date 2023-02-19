const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const bodyP = require('body-parser')

app.use('/',require(path.join(__dirname,'routes/api.js')))
app.use('/api/wdata',require(path.join(__dirname,'routes/api.js')))
app.use('/test',require(path.join(__dirname,'routes/api.js')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})