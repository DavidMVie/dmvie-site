import React, { createContext, useReducer } from 'react';
import moment from 'moment';

import BlogsReducer from '../reducers/BlogsReducer';


const initialBlogsState = {
  blogs: [
    {
      id: 1,
      title: 'Blog 1',
      shortDescription: 'This is the first test blog',
      article: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
      author: 1,
      tags: ['javascript', 'react'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(100, 'days').valueOf()
    }, 
    {
      id: 2,
      title: 'Blog 2',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the second test blog.',
      author: 1,
      tags: ['javascript', 'react', 'mongoose'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(66, 'days').valueOf()
    },
    {
      id: 3,
      title: 'Blog 3',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the third test blog.',
      author: 1,
      tags: ['javascript', 'nodeJS', 'expressJS', 'reactJS', 'the web'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: true,
      createdAt: moment().subtract(2, 'days').valueOf()
    },
    {
      id: 4,
      title: 'Blog 4',
      shortDescription: 'This is the fourth test blog.',
      author: 1,
      tags: ['javascript', 'nodeJS', 'expressJS'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(40, 'days').valueOf()
    },
    {
      id: 5,
      title: 'Blog 5',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the fifth test blog.',
      author: 1,
      tags: ['reactJS', 'javascript'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(21, 'days').valueOf()
    },
    {
      id: 6,
      title: 'Blog 6',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the sixth test blog.',
      author: 1,
      tags: ['angular', 'CSS'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(22, 'days').valueOf()
    },
    {
      id: 7,
      title: 'Blog 7',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the seventh test blog.',
      author: 1,
      tags: ['reactJS'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(26, 'days').valueOf()
    },
    {
      id: 8,
      title: 'Blog 8',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the eighth test blog.',
      author: 1,
      tags: ['CSS'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(25, 'days').valueOf()
    },
    {
      id: 9,
      title: 'Blog 9',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the ninth test blog.',
      author: 1,
      tags: ['CSS'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(19, 'days').valueOf()
    },
    {
      id: 10,
      title: 'Blog 10',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the tenth test blog.',
      author: 1,
      tags: ['reactJS'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(35, 'days').valueOf()
    },
    {
      id: 11,
      title: 'Blog 11',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the eleventh test blog.',
      author: 1,
      tags: ['web components'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(11, 'days').valueOf()
    },
    {
      id: 12,
      title: 'Blog 12',
      article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
      shortDescription: 'This is the twelfth test blog.',
      author: 1,
      tags: ['angular'],
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
      featured: false,
      createdAt: moment().subtract(12, 'days').valueOf()
    }
  ],
  error: null
}

// Create a new Context
export const BlogsContext = createContext(initialBlogsState);

// Provider Component
export const BlogsProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer(BlogsReducer, initialBlogsState);

  // Actions


  return (
    <BlogsContext.Provider value={{
      blogs: state.blogs,
      error: state.error
    }}>    
      {children}
    </BlogsContext.Provider>
  )

}
