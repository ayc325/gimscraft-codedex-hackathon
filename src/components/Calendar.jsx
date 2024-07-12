import React from "react";
import './Calendar.css';
import Map from './Map';

const Calendar = () => {
  
    return (
      <div className = "dateEmbed">
            <h3>you're invited! 💌</h3>
            <h3>join us on saturday, july 27 @ 11 a.m. - 3 p.m. at court st. & 2nd pl.</h3>
            <Map />
            <button
                id = "invitation-button"
                type="button"
                onClick={(e) => {
                e.preventDefault();
                window.open('https://calendar.app.google/iXuCYYJvHjVNBaYR6', "_blank")
            }}
            > click here to add to your calendar!</button>
           </div>
    )
  }
  
  export default Calendar;
