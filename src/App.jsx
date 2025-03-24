import React, { useEffect, useState } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Tracker from './pages/Tracker';
import 'leaflet/dist/leaflet.css';
import Alerts from './pages/Alerts';
import Resources from './pages/Resources';




const App = () => {


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<Tracker />}/>
        <Route path='/alerts'  element={<Alerts />}/>
        <Route path='/resources' element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
