import React from 'react';
import Arrived from './components/Arrived.js';
import Asside from './components/Asside.js';
import Browse from './components/Browse.js';
import Clients from './components/Clients.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
// import Modal from './components/Modal.js';
import './tailwind.css';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Browse />
    <Arrived />
    <Clients />
    <Asside />
    <Footer />
    {/* <Modal /> */}
    </>
  );
}

export default App;
