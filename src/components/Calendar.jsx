import React from "react";
import './Calendar.css';
import Map from './Map';

const Calendar = () => {
  
    return (
      <div className = "dateEmbed">
            <h3>You're Invited! 💌</h3>
            <h3>Join us on Saturday, July 27 @ 11 A.M. - 3 P.M. at Court St. & 2nd Pl.</h3>
            <Map />
            <button
                id = "invitation-button"
                type="button"
                onClick={(e) => {
                e.preventDefault();
                window.open('https://calendar.app.google/iXuCYYJvHjVNBaYR6', "_blank")
            }}
            > Click Here to Add to your Calendar!</button>
           </div>
    )
  }
  
  export default Calendar;
