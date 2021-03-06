// introducing the react library, i'm using the ES6 import here
// import redux from 'redux';
// but this app is a simple nodejs app so we'll have to chagne the syntax from import into const redux
const redux = require('redux')
const reduxLogger = require('redux-logger')

const creatStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
// the constant 'logger' is the middleware in our app
// we'll use applyMiddleware function to apply this middleware to our redux app
const logger = reduxLogger.createLogger()

// this indicates the type of the action (string)
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// now we define our action
// an action is an object that has a type property
// {
//     type: BUY_CAKE,
//     info: 'First redux action'
// }

// an action-creator is a function that simply creates and returns an action
function buyCake() {
    // the buyCake function returns the action {'stuff inside these curly braces'}
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// Redux rule: your app's state has to be represented by a single object 
// state of our application
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }
// we're gonna split our state and the reducer (2 objects)
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}
// this is a reducer functn below
// const reducer = (state = initialState, action) => {
//     // will return the new state here based on the current state and the action
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }
// similarly 2 reducers (2 items and 2 shopkeepers)
const cakeReducer = (state = initialCakeState, action) => {
    // will return the new state here based on the current state and the action
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    // will return the new state here based on the current state and the action
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// this createStore function accepts a param that is the reducer function
// Resp1: Holding the application's state
const store = creatStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())

// Resp4: Allow the app to subscribe the changes in the store
// let's log our updated state here using the subscribe method
const unsubscribe = store.subscribe(
    () => {}
)
// i deleted the console log because now we have the middleware to handle the logs

// Resp3: store provides a dispatch method to update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// the final part is to unsubscribe from the store by calling returned by the subscribe method
unsubscribe()