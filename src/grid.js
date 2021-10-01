
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

    }

    output_belief_states() {
        console.log(this.belief_states)
    }

    is_terminal(coord) {

    }

    is_third_col(coord) {

    }
}
