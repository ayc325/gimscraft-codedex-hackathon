import { useState } from 'react';
import React from "react";
import './App.css';
import Map from './components/Map';
import AboveTheFold from './components/AboveTheFold';
import Calendar from './components/Calendar';
import ClothingGallery from './components/ClothingGallery';

function App() {
  const [count, setCount] = useState(0)
  return (
      <div className = "App">
        <AboveTheFold />
        <ClothingGallery />
        <Calendar />
        <Map />
      </div>
  )
}

export default App;
