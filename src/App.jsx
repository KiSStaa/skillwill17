import React from 'react';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import router from './routes';
import './App.css'

function App() {
  return (
    <div >
      <RouterProvider router = {createBrowserRouter(router)} />
     
    </div>
  );
}

export default App;
