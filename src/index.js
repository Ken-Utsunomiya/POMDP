
const start = (actions, evidence, s0 = {}) => {

}


// (up, up , up) (2,2,2)
start(
    [directions.UP, directions.UP, directions.UP],
    [2,2,2]
)

// (up, up, up) (1,1,1)
start(
    [directions.UP, directions.UP, directions.UP],
    [1,1,1]
)

// (right, right, up) (1,1,end) with S0= (3,2)
start(
    [directions.RIGHT, directions.UP, directions.UP],
    [1,1,"end"],
    {x: 3, y: 2}
)

// (up, right, right, right) (2,2,1,1) with S0= (1,1)
start(
    [directions.UP, directions.UP, directions.RIGHT, directions.RIGHT],
    [2,2,1,1],
    {x: 1, y: 1}
)
