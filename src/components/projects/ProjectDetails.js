import React from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = (props) => {
    const { project, auth } = props;
    if(!auth.uid) return <Redirect to='/signin' /> 
    if (project) {
        return (
            <div className="conatiner section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <h4 className="card-title black-text darken">{project.title} </h4>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action lighten blue-text">
                        <div>posted by {project.authorLastName} <span></span>   {project.authorFirstName} </div>
                        <div> {Date()} </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container center">
                <p>Loading Project ...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ]))(ProjectDetails);
