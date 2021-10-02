
const directions = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
}

class Grid {
    #belief_states
    #start_row
    #end_row
    #start_col
    #end_col

    constructor(bs) {
        this.#belief_states = bs
        this.#start_row = 1
        this.#end_row = 3
        this.#start_col = 1
        this.#end_col = 4
    }

    get belief_states() {
        return this.#belief_states
    }

    update_belief_states(a, e) {
        let new_bs = [
            [null, null, null, null, null, null],
            [null, 0.000, 0.000, 0.000, 0.000, null],
            [null, 0.000, null, 0.000, 0.000, null],
            [null, 0.000, 0.000, 0.000, 0.000, null],
            [null, null, null, null, null, null]
        ]

        let pos
        let sum = 0
        for (let y = this.#start_row; y <= this.#end_row; y++) {
            for (let x = this.#start_col; x <= this.#end_col; x++) {
                pos = { x, y }

                if (new_bs[y][x] != null) {
                    switch (a) {
                        case directions.UP:
                            this.#update_belief_state(new_bs, directions.UP, pos, 0.8, e)
                            this.#update_belief_state(new_bs, directions.RIGHT, pos, 0.1, e)
                            this.#update_belief_state(new_bs, directions.LEFT, pos, 0.1, e)
                            break
                        case directions.DOWN:
                            this.#update_belief_state(new_bs, directions.DOWN, pos, 0.8, e)
                            this.#update_belief_state(new_bs, directions.RIGHT, pos, 0.1, e)
                            this.#update_belief_state(new_bs, directions.LEFT, pos, 0.1, e)
                            break
                        case directions.RIGHT:
                            this.#update_belief_state(new_bs, directions.RIGHT, pos, 0.8, e)
                            this.#update_belief_state(new_bs, directions.UP, pos, 0.1, e)
                            this.#update_belief_state(new_bs, directions.DOWN, pos, 0.1, e)
                            break
                        case directions.LEFT:
                            this.#update_belief_state(new_bs, directions.LEFT, pos, 0.8, e)
                            this.#update_belief_state(new_bs, directions.UP, pos, 0.1, e)
                            this.#update_belief_state(new_bs, directions.DOWN, pos, 0.1, e)
                            break
                    }
                }
            }
        }

        this.#belief_states = new_bs
    }

    #update_belief_state(bs, dir, pos, tp, e) {
        if (!Grid.#is_terminal(pos)) {
            let new_pos
            switch (dir) {
                case directions.UP:
                    new_pos = bs[pos.y - 1][pos.x] != null ? { x: pos.x, y: pos.y - 1 } : { x: pos.x, y: pos.y }
                    break
                case directions.DOWN:
                    new_pos = bs[pos.y + 1][pos.x] != null ? { x: pos.x, y: pos.y + 1 } : { x: pos.x, y: pos.y }
                    break
                case directions.RIGHT:
                    new_pos = bs[pos.y][pos.x + 1] != null ? { x: pos.x + 1, y: pos.y } : { x: pos.x, y: pos.y }
                    break
                case directions.LEFT:
                    new_pos = bs[pos.y][pos.x - 1] != null ? { x: pos.x - 1, y: pos.y } : { x: pos.x, y: pos.y }
                    break
            }

            let op = 0
            if (Grid.#is_terminal(new_pos)) {
                op = e === "end" ? 1 : 0
            } else if(Grid.#is_third_col(new_pos)) {
                switch (e) {
                    case 1: op = 0.9; break
                    case 2: op = 0.1; break
                    case "end": op = 0; break
                }
            } else {
                switch (e) {
                    case 1: op = 0.1; break
                    case 2: op = 0.9; break
                    case "end": op = 0; break
                }
            }

            let val = op * tp * this.#belief_states[pos.y][pos.x]
            bs[new_pos.y][new_pos.x] += Math.floor( val * Math.pow( 10, 5 ) ) / Math.pow( 10, 5 )

            if (new_pos.y === 1 && new_pos.x === 1) {
                // console.log("x: " + pos.x)
                // console.log("y: " + pos.y)
                // console.log(tp)
                // console.log("s: " + this.#belief_states[pos.y][pos.x])
                // console.log(bs[new_pos.y][new_pos.x])
                // console.log("-----------------------")
            }
        }
    }

    output_belief_states() {
        for (let y = this.#start_row; y <= this.#end_row; y++) {
            console.log(`| ${this.#belief_states[y][1]} | ${this.#belief_states[y][2]} | ${this.#belief_states[y][3]} | ${this.#belief_states[y][4]} |`)
        }
    }

    static #is_terminal(pos) {
        return (pos.x === 4) && (pos.y === 1 || pos.y === 2)
    }

    static #is_third_col(pos) {
        return pos.x === 3
    }
}

// Run the program
// -------------------------------------------------------

const start = (actions, evidence, belief_states) => {
    const grid = new Grid(belief_states)
    const n = actions.length

    for (let i = 0; i < n; i++) {
        grid.update_belief_states(actions[i], evidence[i])
        // grid.output_belief_states()
        // console.log("---------------------------")
    }

    // grid.update_belief_states(actions[0], evidence[0])
    console.log("final")
    grid.output_belief_states()
}

// start(
//     [directions.LEFT,directions.LEFT,directions.LEFT,directions.LEFT,directions.LEFT],
//     [2],
//     [
//         [null, null, null, null, null, null],
//         [null, 0.111, 0.111, 0.111, 0.000, null],
//         [null, 0.111, null, 0.111, 0.000, null],
//         [null, 0.111, 0.111, 0.111, 0.111, null],
//         [null, null, null, null, null, null]
//     ]
// )

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
    [directions.RIGHT, directions.UP, directions.UP],
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
    [directions.UP, directions.UP, directions.RIGHT, directions.RIGHT],
    [2, 2, 1, 1],
    [
        [null, null, null, null, null, null],
        [null, 0.000, 0.000, 0.000, 0.000, null],
        [null, 0.000, null, 0.000, 0.000, null],
        [null, 1.000, 0.000, 0.000, 0.000, null],
        [null, null, null, null, null, null]
    ]
)
