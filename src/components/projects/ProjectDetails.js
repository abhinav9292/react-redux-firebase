import React from 'react'

const  ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
  return (
        <div className="conatiner section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <h4 className="card-title black-text darken">Project Title - { id } </h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Doloribus aperiam nisi asperiores dignissimos corporis dolore debitis, incidunt vel saepe mollitia!</p>
                </div>
                <div className="card-action lighten blue-text">
                    <div>posted by Name </div>
                    <div> Date</div>
                </div>
            </div>
        </div>
  )
}

export default ProjectDetails
