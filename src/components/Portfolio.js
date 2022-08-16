import { useState } from 'react'
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Portfolio.css";
import Modal from './Modal';
import { useRef } from 'react';

const Portfolio = ({ carouselImages, modals }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const overlay = useRef(null);
    const modalElement = useRef(null);
    const [modal, setModal] = useState();

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };
    
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const handleClick = (idx, imageIndex) => {
        if (idx === imageIndex) {
            setModal(modals[idx]);
            overlay.current.classList.add("showOverlay");
            modalElement.current.classList.add("showModal");    
        }
    }

    const hideModal = () => {
        overlay.current.classList.remove("showOverlay");
        modalElement.current.classList.remove("showModal");
    }
    
    const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <div id="portfolio">
            <div className="overlay" onClick={hideModal} ref={overlay}></div>
            <Modal
                ref={ modalElement }
                title={ modal?.title }
                description={ modal?.description }
                tags={ modal?.tags }
                links={ modal?.links }
                image={ modal?.image }
                hideModal={ hideModal }
            />
            <h1 className="portfolio--title">Check out some of my works.</h1>
            <div className="carousel">
                <Slider {...settings}>
                        {carouselImages.map((img, idx) => (
                        <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"} onClick={e => handleClick(idx, imageIndex)}>
                            <img src={img} alt={img} />
                        </div>
                        ))}
                </Slider>        
            </div>
        </div>
    )
}

export default Portfolio