export const createProject = (project) => {
    // return the type of the action and project details passed as an arguement 
    //to update in the database
    // return{
    //     type:"CREATE_PROJECT",
    //     project:project 
    //}

    // dispatch here dispatches an action to the reducer here 
    // and getState here is to get the state
    return (dispatch, getState) => {
        // make async call the database
        dispatch({ type:"CREATE_PROJECT", project })
    }

}