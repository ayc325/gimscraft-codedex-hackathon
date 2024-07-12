import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './ClothingGallery2.css';
import clothes1 from '../assets/clothes1.jpg';
import clothes2 from '../assets/clothes2.jpg';
import jeansOutside from '../assets/jeans-outside.webp';
import carrollGardens from '../assets/carroll-gardens.jpg';
import lemonade from '../assets/lemonade.jpg';
import sundress from '../assets/sundress.webp';
import personnyc1 from '../assets/personnyc1.jpg';
import personnyc2 from '../assets/personnyc2.jpg';
import personnyc3 from '../assets/personnyc3.jpg';
import personnyc4 from '../assets/personnyc4.jpg';
import personnyc5 from '../assets/personnyc5.jpg';
import personnyc6 from '../assets/personnyc6.jpg';
import shorts from '../assets/shorts.webp';
import vogue1 from '../assets/vogue1.jpg';
import vogue2 from '../assets/vogue2.jpg';
import vogue3 from '../assets/vogue3.jpg';
import vogue4 from '../assets/vogue4.jpg';
import vogue5 from '../assets/vogue5.jpg';
import vogue6 from '../assets/vogue6.jpg';
import carrollGardens2 from '../assets/carrollgardens2.jpeg';
import carrollGardens3 from '../assets/carrollgardens3.jpeg';

const responsive = {
    0: { 
        items: 1
    },
    568: { 
        items: 2
    },
    1024: {
        items: 3, 
        itemsFit: 'contain'
    },
};

const items = [
    <div className="image"><img id = 'gallery' src={clothes1}/></div>,
            <div className="image" data-value="1"><img id = 'gallery' src={personnyc1}/></div>,
            <div className="image" data-value="2"><img id = 'gallery' src={shorts}/></div>,
            <div className="image" data-value="3"><img id = 'gallery' src={vogue1}/></div>,
            <div className="image" data-value="4"><img id = 'gallery' src={carrollGardens}/></div>,
            <div className="image" data-value="5"><img id = 'gallery' src={personnyc2}/></div>,
            <div className="image" data-value="6"><img id = 'gallery' src={vogue2}/></div>,
            <div className="image" data-value="7"><img id = 'gallery' src={vogue3}/></div>,
            <div className="image" data-value="8"><img id = 'gallery' src={personnyc3}/></div>,
            <div className="image" data-value="9"><img id = 'gallery' src={lemonade}/></div>,
            <div className="image" data-value="10"><img id = 'gallery' src={personnyc4}/></div>,
            <div className="image" data-value="11"><img id = 'gallery' src={vogue4}/></div>,
            <div className="image" data-value="12"><img id = 'gallery' src={jeansOutside}/></div>,
            <div className="image" data-value="13"><img id = 'gallery' src={carrollGardens2}/></div>,
            <div className="image" data-value="14"><img id = 'gallery' src={personnyc5}/></div>,
            <div className="image" data-value="15"><img id = 'gallery' src={clothes2}/></div>,
            <div className="image" data-value="16"><img id = 'gallery' src={vogue5}/></div>,
            <div className="image" data-value="17"><img id = 'gallery' src={personnyc6}/></div>,
            <div className="image" data-value="18"><img id = 'gallery' src={carrollGardens3}/></div>,
            <div className="image" data-value="19"><img id = 'gallery' src={vogue6}/></div>,
            <div className="image" data-value="20"><img id = 'gallery' src={sundress}/></div>
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
);
const ClothingGallery2 = () => {
    return(
        <div>
        <h3 className="title">take a sneak peek 👀</h3>
        <h3 className="title"> at our good quality 💍, tasteful 🤌, and awesome things 👑</h3>
            <Carousel />
        </div>
    )
}

export default ClothingGallery2