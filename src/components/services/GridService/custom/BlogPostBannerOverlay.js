import React from 'react'
import moment from 'moment'

const BlogPostBannerOverlay = ({item}) => {

  return (
    <>
      
      <h1>{item.title} </h1>    
      <p>Posted: {moment(item.createdAt).format("MMM, Do, YYYY")}</p>      
    </>    

  )
}

export default BlogPostBannerOverlay
