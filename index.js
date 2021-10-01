
const directions = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
}

class Grid {
    #belief_states

    constructor(bs) {
        this.#belief_states = bs
    }

    get belief_states() {
        return this.#belief_states
    }

    update_belief_states(a, e) {
        let new_bs = [
            [0,0,0,0],
            [0,null,0,0],
            [0,0,0,0]
        ]
        console.log(new_bs)
        console.log(a)
        console.log(e)
    }

    output_belief_states() {
        console.log(this.belief_states)
    }

    is_terminal(coord) {

    }

    is_third_col(coord) {

    }
}

// Run the program
// -------------------------------------------------------

const start = (actions, evidence, belief_states) => {
    const grid = new Grid(belief_states)
    const n = actions.length

    for (let i = 0; i < n; i++) {
        grid.update_belief_states(actions[i], evidence[i])
    }

    grid.output_belief_states()
}


// (up, up , up) (2,2,2)
start(
    [directions.UP, directions.UP, directions.UP],
    [2,2,2],
    [
        [0.111, 0.111, 0.111, 0.000],
        [0.111, null,  0.111, 0.000],
        [0.111, 0.111, 0.111, 0.111]
    ]
)

// (up, up, up) (1,1,1)
start(
    [directions.UP, directions.UP, directions.UP],
    [1,1,1],
    [
        [0.111, 0.111, 0.111, 0.000],
        [0.111, null,  0.111, 0.000],
        [0.111, 0.111, 0.111, 0.111]
    ]
)

// (right, right, up) (1,1,end) with S0= (3,2)
start(
    [directions.RIGHT, directions.UP, directions.UP],
    [1,1,"end"],
    [
        [0, 1,    0, 0],
        [0, null, 0, 0],
        [0, 0,    0, 0]
    ]
)

// (up, right, right, right) (2,2,1,1) with S0= (1,1)
start(
    [directions.UP, directions.UP, directions.RIGHT, directions.RIGHT],
    [2,2,1,1],
    [
        [0, 0,    0, 0],
        [0, null, 0, 0],
        [1, 0,    0, 0]
    ]
)
