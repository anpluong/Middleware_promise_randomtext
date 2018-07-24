// middleware has alway had the same signature at the top. We always return a function that is called with dispatch
// we are going to return from that another function that's called next. And we are going to return from that another function 
// that get returned with an action. And inside that function body, the most inner most function body, we place some logic, we can run
// every single time an action creator returns an action inside of our application. 
export default function({dispatch}) {
    return next => action => {
        // the action that belongs to action creator.
        // send me to the next middleware in the stack otherwise, send to the reducer.

        // if action does not have payload
        // or, the payload does not have a .then property
        // we dont care about it, send it on.
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
    
        // Make sure the action's promise resolves
        action.payload
            .then(response => {
                // ... action - we preserve the original action, replace the new payload with response
                // create a new action with the old type, but replace the promise with the response data. 
                const newAction = {...action, payload: response}
                // dispatch - mean go up from top and run everything again, but second time, it will hit the return case . 
                // we use dispatch since, we probably want to go through another middleware, make sure it will not miss any middleware.
                dispatch(newAction)
            })
    }   
}

