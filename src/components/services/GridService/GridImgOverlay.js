import React from 'react'
import { useHistory } from 'react-router-dom';

import BlogPostBannerOverlay from'./custom/BlogPostBannerOverlay';
import BlogsThumbOverlay from './custom/BlogsThumbOverlay';
import ProjectsOverlay from './custom/ProjectsOverlay';

const GridImgOverlay = ({item, serviceType, staticOverlay, getArticlesByTag}) => {
  // Refactor this to employ state to track the adding / removing of classes instead of the below dom manipulations.
  
  let history = useHistory();

  const onMouseEnter = (e) => {
    e.target.classList.add('show-overlay')
  };

  const onMouseLeave = (e) => {
    e.target.classList.remove('show-overlay');
  }

  const redir = () => {
    history.push(`/projects/${item.id}`)
  }

  const getServiceType = () => {
    switch (serviceType) {
      case 'projects': 
        return <ProjectsOverlay item={item}/>
      case 'blogsThumb': 
        return <BlogsThumbOverlay item={item} getArticlesByTag={getArticlesByTag}/>
      case 'blogPostBanner':
        return <BlogPostBannerOverlay item={item} />
    }
  }

  return (

      <div 
        className={`grid-thumb-overlay ${serviceType}`} 
        onMouseLeave={!staticOverlay ? onMouseLeave : undefined} 
        onMouseEnter={!staticOverlay ? onMouseEnter : undefined} 
        onClick={!staticOverlay ? redir : undefined}>
        <div className="off-edges">
          {getServiceType()}
        </div>      
      </div>
  )
}

export default GridImgOverlay
