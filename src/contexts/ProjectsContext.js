import React, { createContext, useReducer } from 'react';

import moment from 'moment';

import ProjectsReducer from '../reducers/ProjectsReducer';

// initial state
const initialProjectsState = {
  projects: [
    {
      id: 1,
      name: 'The Dark Fund',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(2, 'days').valueOf(),
      completed: false,
      completedAt: null
    },
    {
      id: 2,
      name: 'ShutterBlink',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/shutterblink.jpg',
      shortDescription: 'Client Photography Website',
      longDescription: 'Photography showcase with E-Commerce delivered via stripe, and MYSQL data store. NodeJS Server side',

      tools: ['HTML', 'CSS', 'Javascript', 'ES6', 'NodeJS', 'MySQL'],
      features: [
        'Mobile First with Flexbox Design',
        'Express Server side with Handlebars templating',
        'Multer image uploading with Sharp editing',
        'Site authentication using Bcrypt and JWT'
      ],
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      featuredSpiel: null,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(1, 'days').valueOf(),
      completed: false,
      completedAt: null
    },
    {
      id: 3,
      name: 'PRJMan',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/prjman.jpg',
      shortDescription: 'Designed to track project,  RAG status, key milestones, resource allocation and more..',
      longDescription: 'A project managment API end point, allowing for storing and retrieving projects and their data. Functionality allows for creating new projects and their sub tasks, monitoring progress against milestones, and features RAG flag notifications on deadlines.',
      tools: ['HTML', 'CSS', 'ReactJS', 'Javascript', 'ES6', 'NodeJS', 'MongoDB', 'Mongoose'],
      features: [
        'NodeJS Express Server Routing',
        'Multer image uploading with Sharp editing',
        'Site Admin authentication',
        'Data Store By MongoDB and Mongoose'
      ],
      githubLink: '',
      liveSiteLink: null,
      featured: true,
      featuredSpiel: null,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(3, 'days').valueOf(),
      completed: false,
      completedAt: null
    },{
      id: 4,
      name: 'The Dork Fund',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(300, 'days').valueOf(),
      completed: false,
      completedAt: null
    },{
      id: 5,
      name: 'Test 5',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(111, 'days').valueOf(),
      completed: false,
      completedAt: null
    },{
      id: 6,
      name: 'Test 6',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(26, 'days').valueOf(),
      completed: false,
      completedAt: null
    },{
      id: 7,
      name: 'Test 7',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(4, 'days').valueOf(),
      completed: false,
      completedAt: null
    },{
      id: 8,
      name: 'Test 8',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(78, 'days').valueOf(),
      completed: true,
      completedAt: moment().subtract(70, 'days').valueOf()
    },{
      id: 9,
      name: 'Test 9',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(114, 'days').valueOf(),
      completed: false,
      completedAt: null
    },
    {
      id: 10,
      name: 'Test 10',
      thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
      shortDescription: 'Client Site, blogging platform',
      longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
      tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
      features: [
        'Design and Color Schemed to client request',
        'PHP running Mysql Storage',
        'Site Authentication',
        'Controlled access to admin area'
      ],
      featuredSpiel: null,
      githubLink: '',
      liveSiteLink: null,
      featured: false,
      progress: 0,
      buildTime: 0,
      progressStatement: '',
      createdAt: moment().subtract(305, 'days').valueOf(),
      completed: true,
      completedAt: moment().subtract(305, 'days').valueOf()
    }
  ],
  error: null
}

// Create context: 
export const ProjectsContext = createContext(initialProjectsState);

export const ProjectsProvider = ({ children }) => {
  
  // UseReducer Hook, gives us back state, and means of changing it over time.
  const [state, dispatch] = useReducer(ProjectsReducer, initialProjectsState);

  // Actions;

  return (
    <ProjectsContext.Provider value={{
      projects: state.projects,
      error: state.error
    }}>    
      {children}
    </ProjectsContext.Provider>
  )
}
