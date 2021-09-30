class Agent {
    #_position

    constructor(init_state = {}) {
        this.#_position = init_state
    }

    get position() {
        return this.#_position
    }

    set position(position) {
        this.#_position = position
    }
}
