import React from 'react'
import Layout from './components/layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routing } from './varibales/Routing';
import "./styles/main.css"
export default function App() {
  
  return  <RouterProvider router ={routing} />;
    
      
    
  
}
