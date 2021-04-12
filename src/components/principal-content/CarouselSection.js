import React from 'react';
import martillo from '../../static/martillo.jpg';
import honestidad from '../../static/honestidad.jpg';
import compromiso from '../../static/compromiso.jpg';
import { Carousel } from 'react-bootstrap';

export const CarouselSection = () => {
    return (
        <div className='carousel'>
                <Carousel fade prevLabel='' nextLabel='' prevIcon='' nextIcon=''>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={martillo}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={honestidad}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={compromiso}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}
