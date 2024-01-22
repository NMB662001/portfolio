import React from 'react';
import './App.css'
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Project from "./Project";
import Nabvar from "./Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './Home';
import Front from './Front';
 export const App=()=>
{
  return(
    
    
    <> 
    <BrowserRouter>
    
    <Nabvar/>
  
<Routes>
<Route path='/Front' element={<Front/>}/>

  <Route path='/About' element={<About/>}/>
  <Route path='/Skills' element={<Skills/>}/>
  <Route path="/Project" element={<Project/>}/>
  <Route path="/Contact" element={<Contact/>}/>
   <Route path='/Home' element={<Home/>}/> 
</Routes>
    </BrowserRouter>
    </>
  )
}


