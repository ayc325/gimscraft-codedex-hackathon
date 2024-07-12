import React from "react";
import "./Map.css"

const Map = () => {
  
    return (
      <div className = "mapEmbed">
            <iframe id = "googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6051.497084079858!2d-73.99986108809131!3d40.67950917127916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a585c181957%3A0x50e694b8c1ef75b2!2s2nd%20Pl%20%26%20Court%20St%2C%20Brooklyn%2C%20NY%2011231!5e0!3m2!1sen!2sus!4v1720793973440!5m2!1sen!2sus"  
            height="450" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
  }
  
  export default Map;
