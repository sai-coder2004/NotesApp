import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pastes from './components/Pastes';
import ViewPastes from './components/ViewPastes';
const router=createBrowserRouter(
    [
      {
          path:"/",
          element:
          <div className="home">
           <Navbar/>
           <Home/>
          </div>
      },
      {
        path:"/pastes",
        element:
        <div className="paste">
          <Navbar/>
          <Pastes/>
        </div>
      },
      {
        path:"/pastes/:id",
        element:
        <div className="viewpastes">
          <Navbar/>
          <ViewPastes/>
        </div>
      }
    ]
);

function App() {

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
