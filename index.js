// this indicates the type of the action (string)
const BUY_CAKE = 'BUY_CAKE';

// now we define our action
// an action is an object that has a type property
// {
//     type: BUY_CAKE,
//     info: 'First redux action'
// }

// an action creator is a function that returns an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}