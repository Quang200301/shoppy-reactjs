import React from 'react';
import king from './king.css';
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kingshoes.vn/data/upload/media/banner-sn3web-1571294680--acbihpps-1592386128--hipspcba-1622453987.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kingshoes.vn/data/upload/media/coverwebcrep-1554432453i-1622454041-1623428656.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kingshoes.vn/data/upload/media/spa-giay-dan-sole-ve-sinh-crep-protect-tai-king-shoes-sneaker-real-hcm-gia-re-8-1576661620--phbspcia-1592386256--apbihspc-1622454065.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;