const express = require('express')
const router = express.Router()
const https = require('https')
const bodyParser = require("body-parser");
require('dotenv').config()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())


router.post('/api',(req,res)=>{
    const city = req.body.cityname
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    https.get(url,(response)=>{
        response.on("data",(d)=>{
            const data = JSON.parse(d)
            res.json(data)
        })
    })

})

module.exports = router