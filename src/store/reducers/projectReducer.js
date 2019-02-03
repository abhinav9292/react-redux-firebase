const initState = {
    projects: [

        { id: 1, title: "React JS -Redux js", content: "complete it in 3 days" },
        { id: 2, title: "Vue JS - Redux js", content: "start whenever you want" },
        { id: 3, title: "Python - Django", content: "start in 1 week" },
        { id: 4, title: "Ruby on Rails ", content: "earlier the better" }

    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project)
            return state;
        case "CRRATE_PROJECT_ERROR":
            console.log("created project error", action.err)
            return state
        default:
            return state;
    }
}

export default projectReducer;