import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProjectsContext } from '../contexts/ProjectsContext';



const Project = (props) => {

  const {projects, error} = useContext(ProjectsContext);
  // desructure the project object from the array returned from filter.
  const [project] = projects.filter((eachProject) => {
    return eachProject.id === props.match.params.id * 1 /* convert string to number */
  })

  const getLiveSiteLink = () => {
    if(project.liveSiteLink) {
      return (
        <span id="liveSiteLink">               
          <Link to={project.liveSiteLink} className="button button-btn1">View Live Site</Link>
        </span>
      )
    } else {
      return (
        <span id="liveSiteLink">
          <span className="button button--disabled" title="I'm working on it!">View Live Site</span>
        </span>
      )
    }
  }

  return (
    <>
    <div className="flex-sections-wrapper">
      <section className="sect project-page">
        <h1>{project.name}</h1>
        <img src={project.thumbPic} alt={project.name}/>
        <div className="project-code-links-wrapper">
          <span className="git-hub-link">
            <a className="button button--btn1">
              Github Repo
            </a>
          </span>
          {getLiveSiteLink()}
        </div>
      </section>
      <section className="sect project-page">
        <h2>About this project:</h2>
        <hr className="sect-line" />
        <p>{project.longDescription}</p>
      </section>
    </div>
    <section className="sect project-page">
      <div className="build-tools-wrapper">
        <h2 className="contains-icon">Build Tools <i className="fas fa-toolbox"></i></h2>
        <hr className="sect-line" />
        <ul className="fa-ul listTools">
          {project.tools.map((tool) => {
            return <li key={tool}><span className="fa-li"><i className="fas fa-check-square"></i></span>{tool}</li>
          })}
        </ul>
      </div>
      <div className="build-features-wrapper">
        <h2 className="contains-icon">Site Features 
          <i className="fas fa-box-open"></i>
        </h2>
        <hr className="sect-line" />
        <ul className="fa-ul listFeatures">
          {project.features.map((feature) => {
            return <li key={feature}><span className="fa-li"><i className="fas fa-check-square"></i></span>{feature}</li>
          })}
        </ul>       
      </div>
    </section>

    </>
  )
}

export default Project
