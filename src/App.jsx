import React from 'react'
import './App.css'

import Layout from './pages/layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { ABOUT, ACCUEIL } from './urls'
import About from './pages/about'

const App = () => {
 

  return (
    <Layout>
      <Routes>
        <Route path={ACCUEIL} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App