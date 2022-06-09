class Swim {
    constructor( distance, time, mainStroke, target ) {
        this.distance = distance // meters
        this.time = time // minutes
        this.mainStroke = mainStroke // [fr,fl,ba,br]
        this.target = target // [sprint, endurance, drill]
        this.strokeList = [ 'fr', 'fl', 'ba', 'br' ]
        this.targetList = [ 'spr', 'end', 'dri' ]
    }
    splitDistance() {
        let warmUp = this.distance / 4 // 25%
        let mainSet = this.distance / 2 // 50%
        let cooldown = this.distance / 4 // 25%
        return [warmUp, mainSet, cooldown] // returns array of distances
    }
    getWarmUpDistance() {
        return this.splitDistance()[0]
    }
    getMainSetDistance() {
        return this.splitDistance()[1]
    }
    getCoolDownDistance() {
        return this.splitDistance()[2]
    }
    splitTime() {
        let warmUp = this.time / 4 // 25%
        let mainSet = this.time / 2 // 50%
        let cooldown = this.time / 4 // 25%
        return [warmUp, mainSet, cooldown] // returns array of distances
    }
    getWarmUpTime() {
        return this.splitTime()[0]
    }
    getMainSetTime() {
        return this.splitTime()[1]
    }
    getCoolDownTime() {
        return this.splitTime()[2]
    }
    convertTimeToSeconds() {
        return Math.floor(this.time * 60)
    }
    convertTimeToHours() {
        return Math.floor(this.time / 60)
    }
    returnWorkoutObject() {
        return {
            warmUp: "",
            mainSet: "",
            coolDown: "",
        }
    }
    outputList() {
        return [this.distance, this.time, this.mainStroke, this.target]
    }
}

let workout = new Swim(5000, 120, 'br', 'drill')

// console.log(swim.splitTime())
// console.log(swim.getMainSetDistance())
// console.log(swim.convertTimeToSeconds())
// console.log(swim.convertTimeToHours())

const mainSets = [
    {
    name: 'ladder',
    reps: 6,
    distancePerRep: this.getMainSetDistance() / ?,
    },
]

/* WORKOUT SCHEMA */
const swimSchema = {
    warmUp: {
        time: "int",
        reps: "int",
        stroke: "string",
        distance: "int",
        pace: "int",
    },
    mainSet: {
        time: "int",
        reps: "int",
        stroke: "string",
        distance: "int",
        pace: "int",
    },
    coolDown: {
        time: "int",
        reps: "int",
        stroke: "string",
        distance: "int",
        pace: "int",
    }
}

function buildWorkout(swimObj) {
    let swim = swimSchema
    // let warmUp = {}
    // let mainSet = {}
    // let coolDown = {}

    // total distance logic
    swim.warmUp.distance = swimObj.getWarmUpDistance()
    swim.mainSet.distance = swimObj.getMainSetDistance()
    swim.coolDown.distance = swimObj.getCoolDownDistance()

    // time logic
    swim.warmUp.time = swimObj.getWarmUpTime()
    swim.mainSet.time = swimObj.getMainSetTime()
    swim.coolDown.time = swimObj.getCoolDownTime()

    // stroke logic
    if (swimObj.mainStroke == 'fr') {
        swim.warmUp.stroke = 'Freestyle'
        swim.mainSet.stroke = 'Freestyle'
        swim.coolDown.stroke = 'Freestyle'
        
    } else if (swimObj.mainStroke == 'fl') {
        swim.warmUp.stroke = 'Freestyle'
        swim.mainSet.stroke = 'Butterfly'
        swim.coolDown.stroke = 'Freestyle'
        
    } else if (swimObj.mainStroke == 'ba') {
        swim.warmUp.stroke = 'Freestyle'
        swim.mainSet.stroke = 'Backstroke'
        swim.coolDown.stroke = 'Freestyle'
        
    } else if (swimObj.mainStroke == 'br') {
        swim.warmUp.stroke = 'Freestyle'
        swim.mainSet.stroke = 'Breaststroke'
        swim.coolDown.stroke = 'Freestyle'

    }


    // return swim
    console.log(swim)
    // console.log(workoutObj)
}

buildWorkout(workout)
