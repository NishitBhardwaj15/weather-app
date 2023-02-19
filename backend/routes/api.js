const express = require('express')
const router = express.Router()
const https = require('https')
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send("hello")
})

router.get('/api/wdata', (req, res) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=671a6cf4223f253eac3e9b019796a83e&units=metric`
    https.get(url,(response)=>{
        response.on("data",(d)=>{
            const data = JSON.parse(d)
            res.json(data)
        })
    })
})

router.post('/test',(req,res)=>{
    const city = req.body.cityname
    console.log(city)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=671a6cf4223f253eac3e9b019796a83e&units=metric`
    https.get(url,(response)=>{
        response.on("data",(d)=>{
            const data = JSON.parse(d)
            res.json(data)
        })
    })

})

module.exports = router