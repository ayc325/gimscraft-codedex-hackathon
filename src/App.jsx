import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import AboveTheFold from './components/AboveTheFold';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className = "App">
        <AboveTheFold />
        <Map />
      </div>
  )
}

export default App;
