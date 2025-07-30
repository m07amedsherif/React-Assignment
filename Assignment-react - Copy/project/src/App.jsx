import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> }
    ]
  },
]);



function App() {

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
