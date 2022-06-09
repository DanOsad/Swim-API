const express = require('express')
const bp = require('body-parser')
const app = express()
const PORT = 3000

app.listen(process.env.PORT || PORT, () => console.log(`Listening on port ${PORT}...`))
app.use(express.json())
app.use(bp.urlencoded({ extended: true }))

// GET WORKOUT
app.get('/api', (req, res) => {
    const di = req.query.d
    const ti = req.query.t
    const str = req.query.s
    const targ = req.query.ta
    const dif = req.query.dif
    const swimObj = {
        distance: di,
        time: ti,
        mainStroke: str,
        target: targ,
        difficulty: dif
    }
    res.status(200)
    res.send(swimObj)
    console.log(swimObj)
    // const swim = new Workout(distance, time, stroke, target)
})

// http://localhost:3000/api?d=5000&t=120&s=fr&ta=spr&dif=adv