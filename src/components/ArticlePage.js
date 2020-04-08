import React, { useContext } from 'react'

import ArticlePortal from './ArticlePortal';
import { BlogsContext } from '../contexts/BlogsContext'
import GridService from './services/GridService/GridService';

const ArticlePage = (props) => {

  const { blogs } = useContext(BlogsContext) 
  const article = blogs.find((blog) => {
    return blog.id === parseInt(props.match.params.id);
  })


    return (  
      <ArticlePortal>
        <section className="sect blog-banner">
          <GridService list={[article]} imgOverlay={true} serviceType="blogPostBanner" staticOverlay={true} />
        </section>
        <section className="sect article-page">
          {article.article}
        </section>
      </ArticlePortal>
    )
  
  }



export default ArticlePage
