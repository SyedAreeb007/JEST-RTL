import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import crousel1 from '../Assets/Images/crousel1.jpg';
import crousel2 from '../Assets/Images/crousel2.webp';
import crousel3 from '../Assets/Images/crousel3.webp';
import './Crousels.css';

const Crousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={crousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Discover Our Latest Collection</h3>
                    <p>Explore the newest trends and find your perfect style with our latest arrivals. Fashion that fits your personality and lifestyle.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={crousel2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Exclusive Deals Just for You</h3>
                    <p>Don't miss out on our exclusive deals and discounts. Shop now and save big on your favorite items.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={crousel3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Quality and Comfort</h3>
                    <p>Experience the perfect blend of quality and comfort with our premium products. Designed to provide ultimate satisfaction.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Crousels;
