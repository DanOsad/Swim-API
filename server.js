const express = require('express')
// const bp = require('body-parser')
const app = express()
const path = require('path')
require('dotenv').config()
// const swim = require('./maths')
const Swim = require('./maths')

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"))

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.status(200)
    res.render('index')
})

// GET WORKOUT
app.post('/api', (req, res) => {
    const distance = req.query.distancwe
    const time = req.query.time
    const stroke = req.query.stroke
    const target = req.query.target
    const difficulty = req.query.difficulty
    let workout = new Swim(
        distance,
        time,
        stroke,
        target,
        difficulty,
        )
        res.status(200)
        res.send(
            JSON.stringify(workout.buildSwim())
            )
})
    
// http://localhost:3000/api?distance=5000&time=120&stroke=fr&target=spr&difficulty=adv

app.listen(
    process.env.PORT, 
    () => console.log(`Listening on port ${process.env.PORT}...`
))