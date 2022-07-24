import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function RestaurantCarousal() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: false,
        nextArrow: true,
        prevArrow: true,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container my-5 text-center " >
            <h4 className="mb-5 lfrf">Love food in React-Food!</h4>
            <div className='pl-4' >
                <Slider {...settings} >
                    <div className='d-flex justify-content-center'>
                        <img src='https://bit.ly/3wl4qbc' alt='burger-img'/>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src='https://bit.ly/3FXdqqj' alt='burger-img' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src='https://bit.ly/3MrCF6t' alt='burger-img' />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src='https://bit.ly/3FUwNjw' alt='burger-img' />
                    </div>
                </Slider>
            </div>

        </div>
    )
}