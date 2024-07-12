import { useState } from 'react';
import React from "react";
import './App.css';
import Map from './components/Map';
import AboveTheFold from './components/AboveTheFold';
import Calendar from './components/Calendar';
import ClothingGallery from './components/ClothingGallery';
import Faq from './components/Faq';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)
  return (
      <div className = "App">
        <AboveTheFold />
        <div id = "gallerys"><ClothingGallery /></div>
        <div id = "invitation"><Calendar /></div>
        <div id = "faqs">
          <h3>frequently asked questions 🤔</h3>
          <Faq />
        </div>
        <Footer />
      </div>
  )
}

export default App;
