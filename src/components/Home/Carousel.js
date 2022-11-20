import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./assets/milan.jpg" alt="milano"/>
                    <p className="legend">Milano</p>
                </div>
                <div>
                    <img src="assets/firenze.jpg" alt="firenze"/>
                    <p className="legend">Firenze</p>
                </div>
                <div>
                    <img src="assets/roma.jpg" alt="roma"/>
                    <p className="legend">Roma</p>
                </div>
                <div>
                    <img src="assets/napoli.jpg" alt="napoli"/>
                    <p className="legend">Napoli</p>
                </div>
                <div>
                    <img src="assets/salerno.jpg" alt="salerno"/>
                    <p className="legend">Salerno</p>
                </div>
            </Carousel>
        );
    }
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default Carousel
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
