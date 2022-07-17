class Swim {
    constructor( distance, time, mainStroke, target, difficulty ) {
        this.distance = distance // meters
        this.time = time // minutes
        this.mainStroke = mainStroke // [fr,fl,ba,br,im]
        this.target = target // [sprint, endurance, drill]
        this.difficulty = difficulty // [beg, adv, exp]
        this.strokeList = [ 'fr', 'fl', 'ba', 'br', 'im' ]
        this.targetList = [ 'spr', 'end', 'dri' ]
        this.swimSchema = {
                            totalTime: "obj",
                            mainStroke: "string",
                            difficulty: "string",
                            target: "string",
                            warmUp: {
                                time: "int",
                                stroke: "string",
                                distance: "int",
                            },
                            mainSet: {
                                time: "int",
                                stroke: "string",
                                distance: "int",
                            },
                            coolDown: {
                                time: "int",
                                stroke: "string",
                                distance: "int",
                            }
        }
        this.warmUpSets = {
                        easy: {
                            name: "Easy",
                            repDist: 200,
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        kick: {
                            name: "Kick",
                            repDist: 200,
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        buildUp: {
                            name: "Build-Up",
                            repDist: 100,
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
        }
        this.mainSets = {
                        ladder: {
                            name: "Ladder",
                            repDist: "arr",
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        timedSprints: {
                            name: "Timed Sprints",
                            repDist: 50,
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        highEffort: {
                            name: "High Effort",
                            repDist: 200,
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        distance: {
                            name: "Distance",
                            // repDist: this.swimSchema.mainSet.distance / 2, // PROBLEM ********
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
        }
        this.coolDownSets = {
                        ladder: {
                            name: "Ladder",
                            repDist: "arr",
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        buildDown: {
                            name: "Build-Down",
                            repDist: 100,
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
                        distance: {
                            name: "Distance",
                            // repDist: this.swimSchema.coolDown.distance / 2, // PROBLEM ********
                            reps: "int",
                            pace: "int" , // calculated later
                            rest: "int", // calculated later
                        },
        }
        this.beginnerPace = {
            "warmUp" : 180,
            "mainSet" : 140,
            "coolDown" : 180,
        }
        this.advancedPace = {
            "warmUp" : 150,
            "mainSet" : 120,
            "coolDown" : 150,
        }
        this.expertPace = {
            "warmUp" : 120,
            "mainSet" : 105,
            "coolDown" : 120,
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
    minutesToSeconds() {
        return Math.floor(this.time * 60)
    }
    minutesToHours() {
        return +(this.time / 60).toFixed(2)
    }
    randomSet(setType) {
        let keys = Object.keys(setType)
        return setType[keys[Math.floor(Math.random()*keys.length)]]
    }
    outputList() {
        return [this.distance, this.time, this.mainStroke, this.target]
    }
    setMainStroke() {
        switch (this.mainStroke) {
            case 'fr':
                this.swimSchema.mainStroke = 'Freestyle'
                this.swimSchema.warmUp.stroke = 'Freestyle'
                this.swimSchema.mainSet.stroke = 'Freestyle'
                this.swimSchema.coolDown.stroke = 'Freestyle'
                break
            case 'fl':
                this.swimSchema.mainStroke = 'Butterfly'
                this.swimSchema.warmUp.stroke = 'Freestyle'
                this.swimSchema.mainSet.stroke = 'Butterfly'
                this.swimSchema.coolDown.stroke = 'Freestyle'
                break
            case 'ba':
                this.swimSchema.mainStroke = 'Backstroke'
                this.swimSchema.warmUp.stroke = 'Freestyle'
                this.swimSchema.mainSet.stroke = 'Backstroke'
                this.swimSchema.coolDown.stroke = 'Freestyle'
                break
            case 'br':
                this.swimSchema.mainStroke = 'Breaststroke'
                this.swimSchema.warmUp.stroke = 'Freestyle'
                this.swimSchema.mainSet.stroke = 'Breaststroke'
                this.swimSchema.coolDown.stroke = 'Freestyle'
                break
            case 'im':
                this.swimSchema.mainStroke = 'Individual Medley'
                this.swimSchema.warmUp.stroke = 'Freestyle'
                this.swimSchema.mainSet.stroke = 'Individual Medley'
                this.swimSchema.coolDown.stroke = 'Freestyle'
                break
            }
    }
    setTotalTime() {
        this.swimSchema.totalTime = {
            inSeconds: this.minutesToSeconds(),
            inMinutes: this.time,
            inHours: this.minutesToHours(),
        }
    }
    setTarget() {
        switch (this.target) {
            case 'spr':
                this.swimSchema.target = 'Sprint'
                break
            case 'end':
                this.swimSchema.target = 'Endurance'
                break
            case 'dri':
                this.swimSchema.target = 'Drill'
                break
        }
    }
    setDiffculty() {
        switch (this.difficulty) {
            case 'beg':
                this.swimSchema.difficulty = 'Beginner'
                break
            case 'adv':
                this.swimSchema.difficulty = 'Advanced'
                break
            case 'exp':
                this.swimSchema.difficulty = 'Expert'
                break
            default:
                this.swimSchema.difficulty = 'Unknown'
            }
    }
    buildWarmUp() {
        this.swimSchema.warmUp.distance = this.getWarmUpDistance()
        this.swimSchema.warmUp.time = this.getWarmUpTime() * 60 //convert to seconds
        this.swimSchema.warmUp.set = this.randomSet(this.warmUpSets)
        if (!this.swimSchema.warmUp.set.repDist) {
            this.swimSchema.warmUp.set.repDist = this.swimSchema.warmUp.distance / 2
        }
        this.swimSchema.warmUp.set.reps = Math.floor(this.swimSchema.warmUp.distance / this.swimSchema.warmUp.set.repDist)
        //  set pace
        switch (this.difficulty) {
            case 'beg':
                this.swimSchema.warmUp.set.pace = this.beginnerPace.warmUp
                this.swimSchema.warmUp.set.rest = Math.round((this.swimSchema.warmUp.time - (this.swimSchema.warmUp.set.reps * this.swimSchema.warmUp.set.pace)) / this.swimSchema.warmUp.set.reps)
                break
            case 'adv':
                this.swimSchema.warmUp.set.pace = this.advancedPace.warmUp
                this.swimSchema.warmUp.set.rest = Math.round((this.swimSchema.warmUp.time - (this.swimSchema.warmUp.set.reps * this.swimSchema.warmUp.set.pace)) / this.swimSchema.warmUp.set.reps)
                break
            case 'exp':
                this.swimSchema.warmUp.set.pace = this.expertPace.warmUp
                this.swimSchema.warmUp.set.rest = Math.round((this.swimSchema.warmUp.time - (this.swimSchema.warmUp.set.reps * this.swimSchema.warmUp.set.pace)) / this.swimSchema.warmUp.set.reps)
                break
        }

        // build ladder
        switch (this.swimSchema.warmUp.set.name) {
            case 'Ladder':
                const buildLadder = distance => {
                    let originalDistance = distance
                    let ladder = []
                    while (distance > 100) {
                        ladder.push(distance/2)
                        distance -= distance/2
                    }
                    let result = ladder.map(num=>Math.floor(num/50)*50)
                    return [...result, originalDistance-result.reduce((a,c)=>a+c)]
                     // returns a list of distances, the last element will be the remaining distance that is to be easy swimming.
                }
                this.swimSchema.coolDown.set.repDist = buildLadder(this.swimSchema.warmUp.distance)
                this.swimSchema.warmUp.set.reps = this.swimSchema.warmUp.set.repDist.length-1
                break
        }
    }
    buildMainSet() {
        this.swimSchema.mainSet.distance = this.getMainSetDistance()
        this.swimSchema.mainSet.time = this.getMainSetTime() * 60 //convert to seconds
        this.swimSchema.mainSet.set = this.randomSet(this.mainSets)
        if (!this.swimSchema.mainSet.set.repDist) {
            this.swimSchema.mainSet.set.repDist = this.swimSchema.mainSet.distance / 2
        }
        this.swimSchema.mainSet.set.reps = Math.floor(this.swimSchema.mainSet.distance / this.swimSchema.mainSet.set.repDist)
        //  set pace
        switch (this.difficulty) {
            case 'beg':
                this.swimSchema.mainSet.set.pace = this.beginnerPace.mainSet
                this.swimSchema.warmUp.set.rest = Math.round((this.swimSchema.mainSet.time - (this.swimSchema.mainSet.set.reps * this.swimSchema.mainSet.set.pace)) / this.swimSchema.mainSet.set.reps)
                break
            case 'adv':
                this.swimSchema.mainSet.set.pace = this.advancedPace.mainSet
                this.swimSchema.mainSet.set.rest = Math.round((this.swimSchema.mainSet.time - (this.swimSchema.mainSet.set.reps * this.swimSchema.mainSet.set.pace)) / this.swimSchema.mainSet.set.reps)
                break
            case 'exp':
                this.swimSchema.mainSet.set.pace = this.expertPace.mainSet
                this.swimSchema.mainSet.set.rest = Math.round((this.swimSchema.mainSet.time - (this.swimSchema.mainSet.set.reps * this.swimSchema.mainSet.set.pace)) / this.swimSchema.mainSet.set.reps)
                break
        }

        // build ladder
        switch (this.swimSchema.mainSet.set.name) {
            case 'Ladder':
                const buildLadder = distance => {
                    let originalDistance = distance
                    let ladder = []
                    while (distance > 100) {
                        ladder.push(distance/2)
                        distance -= distance/2
                    }
                    let result = ladder.map(num=>Math.floor(num/50)*50)
                    return [...result, originalDistance-result.reduce((a,c)=>a+c)]
                     // returns a list of distances, the last element will be the remaining distance that is to be easy swimming.
                }
                this.swimSchema.mainSet.set.repDist = buildLadder(this.swimSchema.mainSet.distance)
                this.swimSchema.mainSet.set.reps = this.swimSchema.mainSet.set.repDist.length-1
                break
        }
    }
    buildCoolDown() {
        this.swimSchema.coolDown.distance = this.getCoolDownDistance()
        this.swimSchema.coolDown.time = this.getCoolDownTime() * 60 //convert to seconds
        this.swimSchema.coolDown.set = this.randomSet(this.coolDownSets)
        if (!this.swimSchema.coolDown.set.repDist) {
            this.swimSchema.coolDown.set.repDist = this.swimSchema.coolDown.distance / 2
        }
        this.swimSchema.coolDown.set.reps = Math.floor(this.swimSchema.coolDown.distance / this.swimSchema.coolDown.set.repDist)

        //  set pace
        switch (this.difficulty) {
            case 'beg':
                this.swimSchema.coolDown.set.pace = this.beginnerPace.coolDown
                this.swimSchema.coolDown.set.rest = Math.round((this.swimSchema.coolDown.time - (this.swimSchema.coolDown.set.reps * this.swimSchema.coolDown.set.pace)) / this.swimSchema.coolDown.set.reps)
                break
            case 'adv':
                this.swimSchema.coolDown.set.pace = this.advancedPace.coolDown
                this.swimSchema.coolDown.set.rest = Math.round((this.swimSchema.coolDown.time - (this.swimSchema.coolDown.set.reps * this.swimSchema.coolDown.set.pace)) / this.swimSchema.coolDown.set.reps)
                break
            case 'exp':
                this.swimSchema.coolDown.set.pace = this.expertPace.coolDown
                this.swimSchema.coolDown.set.rest = Math.round((this.swimSchema.coolDown.time - (this.swimSchema.coolDown.set.reps * this.swimSchema.coolDown.set.pace)) / this.swimSchema.coolDown.set.reps)
                break
        }

        // build ladder
        switch (this.swimSchema.coolDown.set.name) {
            case 'Ladder':
                const buildLadder = distance => {
                    let originalDistance = distance
                    let ladder = []
                    while (distance > 100) {
                        ladder.push(distance/2)
                        distance -= distance/2
                    }
                    let result = ladder.map(num=>Math.floor(num/50)*50)
                    return [...result, originalDistance-result.reduce((a,c)=>a+c)]
                     // returns a list of distances, the last element will be the remaining distance that is to be easy swimming.
                }
                this.swimSchema.coolDown.set.repDist = buildLadder(this.swimSchema.coolDown.distance)
                this.swimSchema.coolDown.set.reps = this.swimSchema.coolDown.set.repDist.length-1
                break
        }
    }
    buildSwim() {
        this.buildWarmUp()
        this.buildMainSet()
        this.buildCoolDown()
        this.setTotalTime()
        this.setTarget()
        this.setDiffculty()
        this.setMainStroke()
        return this.swimSchema
    }
}

const testCases = [
    new Swim(2000,60,'fr','dri', 'exp'),
]

const testBuildSwim = sets => {
    sets.forEach(
        set => {
            // let newSet = set.buildSwim()
            // if (newSet.warmUp.set.name == 'Ladder') {
            //     console.log(newSet.warmUp.set.repDist)
            // } else if (newSet.mainSet.set.name == 'Ladder') {
            //     console.log(newSet.mainSet.set.repDist)
            // } else if (newSet.coolDown.set.name == 'Ladder') {
            //     console.log(newSet.coolDown.set.repDist)
            // } else {
            //     console.log('The set is not a ladder.')
            // }
            console.log(set.buildSwim())
        }
    )
}

testBuildSwim(testCases) // PRINTS SAMPLE SWIM WORKOUTS TO THE CONSOLE

// EXPORT
module.exports = Swim

// work on remaining distance leftover, use as easy swimming at the end of a set