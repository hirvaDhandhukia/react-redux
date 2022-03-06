# Action
- an action is an object that has a type property
- an ation describes what happened and it is the reducer's job to return the new state based on that action.

# Reducers 
- specify how the app's state changes in response to actions sent to the store. 
- actions only describe what happened but reducer's describe how the app's state change
- A reducer is a function that accepts state and action as arguments, and returns the next state of the app
> `(previousState, action) => newState`

# ReduxStore 
- brings the actions and the reducers together
- one store for the entire application
> Responsibilities:
> 1. Holds application state
> 2. Allows access to state via **_getState()_**
> 3. Allows state to be updated via **_dispach(action)_**
> 4. Registers listners via **_subscribe(listner)_**
> 5. Handles unregistering of listners via the function returned by the subscribe method


- getState gives our application access to th state it holds
- the subscribe method accepts a function as it's param which is executed any time the state in the redux-store


# Middleware
- provides a third-party extension point between dispatching an action, and the moment ot reaches the reducer
- used for logging, crash-reporting, performing asynchronous tasks etc
> How to use a middleware in a redux?
> 1. import applyMiddleware
> 2. have it as an argument to the createStore 
> 3. and pass in the middleware to the applyMiddleware method


# Async Actions
- actions that don't occur at the same time in a store
- Asynchronous API calls to fetch data from an end point and use that data in your application
/