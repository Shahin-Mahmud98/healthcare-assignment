import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../Banner-images/Banner-1.jpg'
import Banner2 from '../../../Banner-images/Banner-2.jpg'
import Banner4 from '../../../Banner-images/Banner-4.jpg'




const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: "85vh" }}
                        className="d-block w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-primary">Pan CtScan</h3>
                        <p className="text-primary" >Dedicated to offer comprehensive treatment for a wide range of patients </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "85vh" }}
                        className="d-block w-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 >Surgery Point</h3>
                        <p >All Surgery is here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "85vh" }}
                        className="d-block w-100"
                        src={Banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>SMSM Hospital</h3>
                        <p>This Own building Our Hospital</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;