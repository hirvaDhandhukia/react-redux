const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

// we need to define 3 things: state, action and the reducer
// the state is an object with 3 properties
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// action-creators => functions that returns our action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// the reducer function here
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}

// this is an action-creator
// final step: to define the async action creator
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        // her's an axios request to get the data from an API endpoint
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // if the request is success, then we get back the response
            // response.data is the array of users
            // .map(user=>user.id) is used here to just to map through API and return all user's id instead of flooding our store with whole info from the API
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // if response failed, we get back an error
            // error.message is the error description
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

// next: create the redux store
// we will apply the redux-thunk middleware to our redux store
// redux-thunk is used to Define async action creators by just putting the thunkMiddleware as an argument to the store's middleware
// what this allows is for an action creator to return a function instead of and action
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// finally at last we subscribe to our store and then dispatch the action creator
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())