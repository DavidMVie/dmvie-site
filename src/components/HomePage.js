import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { ProjectsContext } from '../contexts/ProjectsContext';
import { getLastXListItems, getFeaturedItem } from '../selectors/global';

 import GridService from './services/GridService/GridService';
import { BlogsContext } from '../contexts/BlogsContext';

const HomePage = () => {

  const { projects } = useContext(ProjectsContext)
  const { blogs } = useContext(BlogsContext)

  const [ latestProjects, setLatestProjects ] = useState(getLastXListItems(projects, 3, false));
  const [ latestBlogs, setLatestBlogs ] = useState(getLastXListItems(blogs, 3, false));

  const featuredProject = projects.find((project) => {
    return project.featured;
  })
  const featuredBlog = blogs.find((blog) => {
    return blog.featured;
  })


  return (
    <>
    <section className="sect home-page-feature-project">
      <h1 className="contains-icon">{featuredProject.name}<img src="https://dmvie1.s3.us-east-2.amazonaws.com/crane.png" alt="Crane Image"></img></h1>
      <p>{featuredProject.featuredSpiel}</p>
      <div className="featured-item-wrapper">
        <div className="img-featured-item-wrapper">
          <img className="img-featured-item" src={featuredProject.thumbPic}/>        
        </div>
        <div className="home-page-feature-details">
          <p>{featuredProject.shortDescription}</p>
          <p>Built With:
            {featuredProject.tools.map((tool) => {
              return `${tool}, `
            })}
          </p>
          <div className="center-wrapper">
            <Link to={`/projects/${featuredProject.id}`} className="button button--btn1">More Info</Link>
          </div>          
        </div>  
      </div>
    </section>

    <section className="sect home-page-projects">      
      <h1 className="section-title contains-icon"> Other Works: <i className="fas fa-project-diagram"></i></h1>
      <p>Or have a look through some of my other work,  in various states of completion!</p>

      <GridService list={latestProjects} imgOverlay={true} serviceType={"projects"} staticOverlay={false}/>

      <Link to="/all-projects" className="button button--btn1">See All Projects</Link>
    </section>

    <section className="sect home-page-feature-blog">
      <h1 className="contains-icon">{featuredBlog.title}<img src="https://dmvie1.s3.us-east-2.amazonaws.com/crane.png" alt="Crane Image"></img></h1>
      <p>{featuredBlog.shortDescription}</p>
      {/* list needs an array, so create an array literal and into it add the featured blog object so there's now a list with 1 item.. */}
      <GridService list={[featuredBlog]} imgOverlay={true} serviceType="blogsThumb" staticOverlay={true} />
    </section>

    <section className="sect home-page-blogs">
      
      <h1 className="section-title contains-icon">Articles <i className="far fa-newspaper"></i></h1>

      <GridService list={latestBlogs} imgOverlay={true} serviceType={"blogsThumb"} staticOverlay={true}/>
    </section>
    </>
  )
}

export default HomePage

