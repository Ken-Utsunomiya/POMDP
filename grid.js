
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
