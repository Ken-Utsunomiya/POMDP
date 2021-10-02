
import { Grid, directions } from './grid.js'

// Run the program with given sequence of actions, observations and initial belief states
// -------------------------------------------------------

const start = (actions, evidence, belief_states) => {
    const grid = new Grid(belief_states)
    const n = actions.length

    for (let i = 0; i < n; i++) {
        grid.update_belief_states(actions[i], evidence[i])
    }

    console.log("final")
    grid.output_belief_states()
}


// (up, up , up) (2,2,2)
console.log("Sequence #1")
start(
    [directions.UP, directions.UP, directions.UP],
    [2, 2, 2],
    [
        [null, null, null, null, null, null],
        [null, 0.111, 0.111, 0.111, 0.000, null],
        [null, 0.111, null, 0.111, 0.000, null],
        [null, 0.111, 0.111, 0.111, 0.111, null],
        [null, null, null, null, null, null]
    ]
)

console.log()
console.log("Sequence #2")

// (up, up, up) (1,1,1)
start(
    [directions.UP, directions.UP, directions.UP],
    [1, 1, 1],
    [
        [null, null, null, null, null, null],
        [null, 0.111, 0.111, 0.111, 0.000, null],
        [null, 0.111, null, 0.111, 0.000, null],
        [null, 0.111, 0.111, 0.111, 0.111, null],
        [null, null, null, null, null, null]
    ]
)

console.log()
console.log("Sequence #3")

// (right, right, up) (1,1,end) with S0= (3,2)
start(
    [directions.RIGHT, directions.RIGHT, directions.UP],
    [1, 1, "end"],
    [
        [null, null, null, null, null, null],
        [null, 0.000, 1.000, 0.000, 0.000, null],
        [null, 0.000, null, 0.000, 0.000, null],
        [null, 0.000, 0.000, 0.000, 0.000, null],
        [null, null, null, null, null, null]
    ]
)

console.log()
console.log("Sequence #4")

// (up, right, right, right) (2,2,1,1) with S0= (1,1)
start(
    [directions.UP, directions.RIGHT, directions.RIGHT, directions.RIGHT],
    [2, 2, 1, 1],
    [
        [null, null, null, null, null, null],
        [null, 0.000, 0.000, 0.000, 0.000, null],
        [null, 0.000, null, 0.000, 0.000, null],
        [null, 1.000, 0.000, 0.000, 0.000, null],
        [null, null, null, null, null, null]
    ]
)
