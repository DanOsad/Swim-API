class Swim {
    constructor( distance, time, mainStroke, target, difficulty ) {
        this.distance = distance // meters
        this.time = time // minutes
        this.mainStroke = mainStroke // [fr,fl,ba,br]
        this.target = target // [sprint, endurance, drill]
        this.difficulty = difficulty // [beg, adv, exp]
        this.strokeList = [ 'fr', 'fl', 'ba', 'br', 'im' ]
        this.targetList = [ 'spr', 'end', 'dri' ]
        this.swimSchema = {
                            warmUp: {
                                time: "int",
                                reps: "int",
                                stroke: "string",
                                distance: "int",
                            },
                            mainSet: {
                                time: "int",
                                reps: "int",
                                stroke: "string",
                                distance: "int",
                            },
                            coolDown: {
                                time: "int",
                                reps: "int",
                                stroke: "string",
                                distance: "int",
                            }
                        }
        this.warmUpSets = {
                        easy: {
                            name: "Easy",
                            reps: 4,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        kick: {
                            name: "Kick",
                            reps: 10,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        buildUp: {
                            name: "Build-Up",
                            reps: 10,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
        }
        this.mainSets = {
                        ladder: {
                            name: "Ladder",
                            reps: 6,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        timedSprints: {
                            name: "Timed Sprints",
                            reps: 10,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        highEffort: {
                            name: "High Effort",
                            reps: 5,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        distance: {
                            name: "Distance",
                            reps: 1,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
        }
        this.coolDownSets = {
                        ladder: {
                            name: "Ladder",
                            reps: 5,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        buildDown: {
                            name: "Build-Down",
                            reps: 5,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        distance: {
                            name: "Distance",
                            reps: 1,
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
        }
    }
    calculateSet(set) {
        // this.calculateSet(this.mainSets[`${set}`]) -> USAGE
        // if (this.)
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
    randomSet(setType) {
        let keys = Object.keys(setType)
        return setType[keys[Math.floor(Math.random()*keys.length)]]
    }
    // returnWorkoutObject() {
    //     return {
    //         warmUp: "",
    //         mainSet: "",
    //         coolDown: "",
    //     }
    // }
    outputList() {
        return [this.distance, this.time, this.mainStroke, this.target]
    }
    buildWorkout() {
        let swim = this.swimSchema
    
        // total distance logic
        swim.warmUp.distance = this.getWarmUpDistance()
        swim.mainSet.distance = this.getMainSetDistance()
        swim.coolDown.distance = this.getCoolDownDistance()
    
        // time logic
        swim.warmUp.time = this.getWarmUpTime()
        swim.mainSet.time = this.getMainSetTime()
        swim.coolDown.time = this.getCoolDownTime()

        /* warmUp logic */
        // get random warmUp set
        swim.warmUp.set = this.randomSet(this.warmUpSets)
        
        /* mainSet logic */
        // get random mainSet
        swim.mainSet.set = this.randomSet(this.mainSets)
        
        /* coolDown logic */
        // get random coolDown set
        swim.coolDown.set = this.randomSet(this.coolDownSets)


        // stroke logic
        if (this.mainStroke == 'fr') {
            swim.warmUp.stroke = 'Freestyle'
            swim.mainSet.stroke = 'Freestyle'
            swim.coolDown.stroke = 'Freestyle'
            
        } else if (this.mainStroke == 'fl') {
            swim.warmUp.stroke = 'Freestyle'
            swim.mainSet.stroke = 'Butterfly'
            swim.coolDown.stroke = 'Freestyle'
            
        } else if (this.mainStroke == 'ba') {
            swim.warmUp.stroke = 'Freestyle'
            swim.mainSet.stroke = 'Backstroke'
            swim.coolDown.stroke = 'Freestyle'
            
        } else if (this.mainStroke == 'br') {
            swim.warmUp.stroke = 'Freestyle'
            swim.mainSet.stroke = 'Breaststroke'
            swim.coolDown.stroke = 'Freestyle'
    
        } else if (this.mainStroke == 'im') {
            swim.warmUp.stroke = 'Freestyle'
            swim.mainSet.stroke = 'Individual Medley'
            swim.coolDown.stroke = 'Freestyle'
    
        }
        return swim
    }
}

const workout = new Swim(5000, 120, 'br', 'drill')

console.log(workout.buildWorkout())
// console.log(workout.randomSet(workout.coolDownSets))