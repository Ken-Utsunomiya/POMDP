# POMDP (Partially Observable Markov Decision Process)
This is an illustration of belief states in the 3x4 grid below.

<img width="356" alt="Screen Shot 2021-10-03 at 7 05 57 PM" src="https://user-images.githubusercontent.com/81115999/135783379-4f88e36e-7398-48ee-a31d-f6e30cae70f5.png">

## Goal
Calculate the belief state for each position in the grid based on the actions and the evidence. The output is how likeyly the agent ends up at each state.

## Settings
- The agent's action is one of [UP, DOWN, LEFT, RIGHT] at each state.
- (3,4) and (2,4) are terminal states.
- In the non-terminal states, the agent doesn't know where it is unless the current position is given.
- The agent can correctly observe the number of walls around it at each state with a probability of 0.9.
- The agent can correctly take actions as it is told with a probability of 0.8. But there is a 0.1 chance that it goes right(left) seen from the given action. (i.e. UP: 0.8, RIGHT: 0.1, LEFT: 0.1)
