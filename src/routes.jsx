import React from 'react';
import Navi from './pages/Navi';
import Param from './pages/Param';
import Error from './pages/Error';
import Main from './pages/Main';
import About from './pages/About';
const routes = [
  {
    element: <Navi/>, 
    path: '/',
    children: [
      { element: <Main />, index: true  },
      {  element: <About />, path: 'about' }, 
    ],
  },
  {
    element: <Param/>, 
    path: 'user/:id'
  },
  {
    element: <Error/>, 
    path: '*'
  },
];

export default routes;