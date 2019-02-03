import React from 'react'

const ProjectSummary = ({ project }) => {
    return(
        <div className="card z-depth-0 project-summary">
                <div className="card-content gery-text text-darken-3">
                    <span className="card-title"> { project.title } </span>
                    <p className="card-title"> { project.content } </p>
                        <p className="red-text"> Posted by Name </p>
                        <p className="blue-text"> Date </p>
                </div>
        </div>
    )
}

export default ProjectSummary;