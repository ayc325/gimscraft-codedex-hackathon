import React from "react";
import './ClothingGallery.css';
import clothes1 from '../assets/clothes1.jpg';
import clothes2 from '../assets/clothes2.jpg';
import jeansOutside from '../assets/jeans-outside.webp';
import carrollGardens from '../assets/carroll-gardens.jpg';
import lemonade from '../assets/lemonade.jpg';
import sundress from '../assets/sundress.webp';
import personnyc1 from '../assets/personnyc1.jpeg';
import personnyc2 from '../assets/personnyc2.jpeg';
import personnyc3 from '../assets/personnyc3.jpeg';
import personnyc4 from '../assets/personnyc4.jpeg';
import personnyc5 from '../assets/personnyc5.jpeg';
import personnyc6 from '../assets/personnyc6.jpeg';
import sundress2 from '../assets/sundress2.webp';
import shorts from '../assets/shorts.webp';
import vogue1 from '../assets/vogue1.webp';
import vogue2 from '../assets/vogue2.webp';
import vogue3 from '../assets/vogue3.webp';
import vogue4 from '../assets/vogue4.webp';
import vogue5 from '../assets/vogue5.webp';
import vogue6 from '../assets/vogue6.webp';
import carrollGardens2 from '../assets/carrollgardens2.jpeg';
import carrollGardens3 from '../assets/carrollgardens3.jpeg';



class ClothingGallery extends React.Component {
    constructor(){
      super()
      this.scroll = this.scroll.bind(this)
    }
  
    scroll(direction){
      let far = $( '.image-container' ).width()/2*direction;
      let pos = $('.image-container').scrollLeft() + far;
      $('.image-container').animate( { scrollLeft: pos }, 1000)
    }
  
    render() {
      return <div className="main">
        <h3 className="title">Take a Sneak Peek 👀</h3>
        <h3 className="title"> at our good quality 💍, tasteful 🤌, and awesome things 👑</h3>
        <div className="wrapper">
          <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
          <div className="image-container">
            <div className="image"><img id = 'gallery' src={clothes1}/></div>
            <div className="image"><img id = 'gallery' src={personnyc1}/></div>
            <div className="image"><img id = 'gallery' src={shorts}/></div>
            <div className="image"><img id = 'gallery' src={vogue1}/></div>
            <div className="image"><img id = 'gallery' src={carrollGardens}/></div>
            <div className="image"><img id = 'gallery' src={personnyc2}/></div>
            <div className="image"><img id = 'gallery' src={vogue2}/></div>
            <div className="image"><img id = 'gallery' src={vogue3}/></div>
            <div className="image"><img id = 'gallery' src={personnyc3}/></div>
            <div className="image"><img id = 'gallery' src={sundress2}/></div>
            <div className="image"><img id = 'gallery' src={lemonade}/></div>
            <div className="image"><img id = 'gallery' src={personnyc4}/></div>
            <div className="image"><img id = 'gallery' src={vogue4}/></div>
            <div className="image"><img id = 'gallery' src={jeansOutside}/></div>
            <div className="image"><img id = 'gallery' src={carrollGardens2}/></div>
            <div className="image"><img id = 'gallery' src={personnyc5}/></div>
            <div className="image"><img id = 'gallery' src={clothes2}/></div>
            <div className="image"><img id = 'gallery' src={vogue5}/></div>
            <div className="image"><img id = 'gallery' src={personnyc6}/></div>
            <div className="image"><img id = 'gallery' src={carrollGardens3}/></div>
            <div className="image"><img id = 'gallery' src={vogue6}/></div>
          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
        </div>
      </div>;
    }
  }
  export default ClothingGallery;