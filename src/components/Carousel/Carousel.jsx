import React, {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import "./Carousel.css";

const Carousel = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');

    const handleNext = () => {
            setAnimationClass('slide-out'); // Adiciona a classe de animação de saída
            setTimeout(() => {
                setCurrentIndex(currentIndex < React.Children.count(children) - 1 ? currentIndex + 1 : 0);
                setAnimationClass('slide-in'); // Adiciona a classe de animação de entrada
            }, 500); // Duração da animação de saída
    };

    const handlePrev = () => {
            setAnimationClass('slide-out-prev'); // Adiciona a classe de animação de saída
            setTimeout(() => {
                setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : React.Children.count(children) - 1);
                setAnimationClass('slide-in-prev'); // Adiciona a classe de animação de entrada
            }, 500); // Duração da animação de saída
    };

    return (
        <div className="carousel-content">
            <IoIosArrowBack className="arrow" onClick={handlePrev} disabled={currentIndex === 0} />
            <div className={`carousel-box ${animationClass}`} style={{ margin: '20px' }}>
                {React.Children.toArray(children)[currentIndex]}
            </div>
            <IoIosArrowForward className="arrow" onClick={handleNext} disabled={currentIndex === React.Children.count(children) - 1} />
        </div>
    );

};

export default Carousel;