import React from 'react';
import moment from "moment";

const ProjectSummary = ({ project }) => {

    console.log("project summary in project", project)
    return(
        <div className="card z-depth-0 project-summary">
                <div className="card-content gery-text text-darken-3">
                    <span className="card-title"> { project.title } </span>
                    <p className="card-title"> { project.content } </p>
                        <p className="red-text"> Posted by {project.authorLastName} {project.authorFirstName} </p>
                        <p className="blue-text"> { moment(project.createdAt.toDate()).calendar() }</p>
                </div>
        </div>
    )
}

export default ProjectSummary;