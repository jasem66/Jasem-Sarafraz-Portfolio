import React from 'react';
import {About, Footer, Header, Skills, Testimonials, Work} from './container';
import {Navbar} from './components' ;
import './App.scss'

function App() {
  return (
    <h1 className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials />
      <Footer /> */}
    </h1>
  )
}

export default App
