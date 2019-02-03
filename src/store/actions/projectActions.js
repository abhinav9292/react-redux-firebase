export const createProject = (project) => {
    // return the type of the action and project details passed as an arguement 
    //to update in the database
    // return{
    //     type:"CREATE_PROJECT",
    //     project:project 
    //}

    // dispatch here dispatches an action to the reducer here 
    // and getState here is to get the state
    return (dispatch, getState, { getFirestore, getFirebase })  => {
        // make async call the database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName : 'A Reddy',
            authorLastName : 'Mareddy',
            authorId : 12345,
            createdAt : new Date()
        })
        .then( () => {
            dispatch({ type:"CREATE_PROJECT", project })
        })
        .catch( (err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err })
        })
        
    }

}