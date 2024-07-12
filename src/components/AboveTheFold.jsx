import React from "react";
import './AboveTheFold.css';
import clothes3 from '../assets/clothes3.jpg';

const AboveTheFold = () => {
  
    return (
        <header>
            <div className = "Header">
            <div className = "head-image">
                <img id = 'clothes3' src={clothes3}/>
            </div>
            <div class='text-on-image'>
                <h1>south brooklyn stoop sale</h1>
                <h2>"your trash 🗑️, someone else's treasure 💰"</h2>
            </div>
        </div>
        </header>
    )
  }
  
  export default AboveTheFold;
