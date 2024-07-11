import { useState } from 'react';
import React from "react";
import './App.css';
import Map from './components/Map';
import AboveTheFold from './components/AboveTheFold';
import Calendar from './components/Calendar';
import ClothingGallery from './components/ClothingGallery';
import Faq from './components/Faq';

function App() {
  const [count, setCount] = useState(0)
  return (
      <div className = "App">
        <AboveTheFold />
        <ClothingGallery />
        <Calendar />
        <h3>Frequently Asked Questions 🤔</h3>
        <Faq />
      </div>
  )
}

export default App;
