# Action
an action is an object that has a type property

# Reducers 
- specify how the app's state changes in response to actions sent to the store. 
- actions only describe what happened but reducer's describe how the app's state change
- A reducer is a function that accepts state and action as arguments, and returns the next state of the app
`(previousState, action) => newState`