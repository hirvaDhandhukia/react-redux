// this indicates the type of the action (string)
const BUY_CAKE = 'BUY_CAKE';

// now we define our action
// an action is an object that has a type property
// {
//     type: BUY_CAKE,
//     info: 'First redux action'
// }

// an action creator is a function that simply creates and returns an action
function buyCake() {
    // the buyCake function returns the action {'stuff inside these curly braces'}
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// Redux rule: your app's state has to be represented by a single object 
const initialState = {
    numOfCakes: 10
}
// this is a reducer functn below
const reducer = (state = initialState, action) => {
    // will return the new state here based on the current state and the action
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}