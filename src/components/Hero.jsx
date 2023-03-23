import React, {useEffect, useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import { useWindowSize } from "react-use";
import classNames from "classnames";

const Hero = () => {

    const slides = [
        {
            id: 1,
            url: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 2,
            url: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 3,
            url: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },

        {
            id: 4,
            url: 'https://images.pexels.com/photos/7613554/pexels-photo-7613554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: 5,
            url: 'https://images.pexels.com/photos/96619/pexels-photo-96619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);

    const { width } = useWindowSize();

    const screenSize = classNames({
        "sm": width < 768,
        "md": width >= 768 && width < 1024,
        "lg": width >= 1024,
    });

    useEffect(() => {
        let timer;

        if (!isUserInteracting) {
            timer = setTimeout(() => {
                const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            }, 5000);
        }

        return () => {
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        };
    }, [currentIndex, isUserInteracting]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleTouchEnd = () => {
        setIsUserInteracting(false);
    }

    const handleMouseUp = () => {
        setIsUserInteracting(false);
    }

    const displayHeroText = () => {
        return (
            <>
                {screenSize === "sm" ?
                    <div className='relative w-full h-full text-gray-200 max-h-full h-full bg-black/40 flex flex-col justify-center'>
                        <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                            The
                        </h1>
                        <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                            <span className='text-yellow-200'>Best</span>
                        </h1>
                        <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                            <span className='text-yellow-200'>Foods </span>
                        </h1>
                        <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                            Delivered
                        </h1>
                    </div>
                    :
                    <div className='relative w-full h-full text-gray-200 max-h-full h-full bg-black/40 flex flex-col justify-center'>
                        <h1 className='px-4 ml-[8%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                            The <span className='text-orange-600'>Best</span>
                        </h1>
                        <h1 className='px-4 ml-[8%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                            <span className='text-orange-600'>Foods </span> Delivered
                        </h1>
                    </div>
                }
            </>
        )
    }

    return (
        <div className='max-w-full h-[300px] md:h-[300px] lg:h-[600px] mx-none'>
            <div className='h-full relative group'>
                {/* Overlay */}
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-[300px] md:h-[300px] lg:h-[600px] object-cover bg-center bg-cover duration-500'>
                    {displayHeroText()}
                </div>
                <div
                    onTouchEnd={() => handleTouchEnd()}
                    onMouseDown={() => setIsUserInteracting(true)}
                    onMouseUp={() => handleMouseUp()}
                    className='
                    hidden group-hover:block
                    absolute
                    top-[45%]
                    -translate-x-0
                    translate-y-[50%]
                    left-5
                    text-2xl
                    rounded-full
                    p-2 bg-black/20
                    text-white
                    cursor-pointer'
                >
                    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
                </div>
                {/* Right Arrow */}
                <div
                    onTouchEnd={() => handleTouchEnd()}
                    onMouseDown={() => setIsUserInteracting(true)}
                    onMouseUp={() => handleMouseUp()}
                    className='
                    hidden
                    group-hover:block
                    absolute
                    top-[45%]
                    -translate-x-0
                    translate-y-[50%]
                    right-5
                    text-2xl
                    rounded-full
                    p-2
                    bg-black/20
                    text-white
                    cursor-pointer'
                >
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
            </div>
        </div>
    );
};

export default Hero;