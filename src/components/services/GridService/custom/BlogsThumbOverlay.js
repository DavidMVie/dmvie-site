import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogsThumbOverlay = ({item, getArticlesByTag}) => {

  const getDate = (stamp) => {
    return moment(stamp).format('MMMM Do, YYYY');
  }

  const onClick = (e) => {
    const content = e.target.textContent;
    console.log(content)
    getArticlesByTag(content)
  }
 
  return (
    <>
      <p className="blogs-thumb-date">Posted:{getDate(item.createdAt)}</p>
      <div className="thumb-center">
        <h1>{item.title} <hr /></h1>
        <div>
          <Link to={`/articles/${item.id}`}>
            Read Article
          </Link>
        </div>
      </div>              
      <ul className="blogs-thumb-tags"> 
        {item.tags.map((tag) => {
          return <li key={tag} onClick={onClick}><i className="fas fa-tags"></i>{tag}</li>
        })}        
      </ul>   
    </>    

  )
}

export default BlogsThumbOverlay
