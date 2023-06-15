import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import OurServices from './pages/OurServices';
import Why from './pages/Why';
import Contact from './pages/Contact';
import WhatsApp from './components/WhatsApp';
import About from './pages/About';
import ServicesMain from './pages/ServicesMain';
import Blog from './pages/Blog';
import KeyEnablers from './pages/Blogs/KeyEnablers';
import FutureOfeRetail from './pages/Blogs/FutureOfeRetail';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/services' element={<OurServices />} />
        <Route path='/why' element={<Why />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/servicesmain' element={<ServicesMain/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/e-retail-market-and-shopper-dynamics' element={<eRetail/>} />
        <Route path='/blog/key-enablers-for-growth' element={<KeyEnablers/>} />
        <Route path='/blog/future-of-e-retail-in-india' element={<FutureOfeRetail/>} />
      </Routes>
      <Footer />
      <WhatsApp />
    </BrowserRouter>
    </div>
  )
}

export default App