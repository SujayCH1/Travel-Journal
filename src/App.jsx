import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Journal } from './components/Journal'
import { createBrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './components/Layout'
import Home from './components/Home'
import Timeline from './components/Timeline'
import About from './components/About'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Layout /> */}
        {/* <Route
          path='/*'
          element={<Layout />}
        ></Route> */}
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='journal'
          element={<Journal />}
        ></Route>
        <Route
          path='timeline'
          element={<Timeline />}
        ></Route>
        <Route
          path='about'
          element={<About/>}
        ></Route>
      </Routes>
    </>
  )
}

export default App
