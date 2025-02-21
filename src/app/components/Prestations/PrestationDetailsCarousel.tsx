'use client';
import React, { useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import PrestationDetails from './PrestationDetails';
import './prestation-details_carousel.css';

interface CarouselProps {
    prestations: {
        image: string;
        title: string;
        description: string[];
        className?: string;
        subtitle : string
    }[];
}

const Carousel: React.FC<CarouselProps> = ({ prestations }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const controlsButtonLeft = useAnimation();
    const controlsButtonRight = useAnimation();
    const prestationContainer = useAnimation();

    const nextPrestation = async () => {
        await controlsButtonLeft.start({ opacity: 0, });
        await controlsButtonRight.start({ opacity: 0, });
        await prestationContainer.start({ opacity: 0, x: 2000, transition: { duration: 0.7 } });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % prestations.length);
        await prestationContainer.start({ opacity: 1, x: 0, transition: { duration: 0.7, delay : 0.2 } });
        await controlsButtonLeft.start({ opacity: 1, });
        await controlsButtonRight.start({ opacity: 1, });
    };
    const prevPrestation = async () => {
        await controlsButtonRight.start({ opacity: 0, });
        await controlsButtonLeft.start({ opacity: 0, });
        await prestationContainer.start({ opacity: 1, x: -2000, transition: { duration: 0.7} });
        setCurrentIndex((prevIndex) => (prevIndex - 1 + prestations.length) % prestations.length);
        await prestationContainer.start({ opacity: 1, x: 0, transition: { duration: 0.7, delay : 0.2 } });
        await controlsButtonRight.start({ opacity: 1, });
        await controlsButtonLeft.start({ opacity: 1, });
    };
    return (
        <motion.div className="prestation_carousel">
            <motion.button
                className="prev_projet"
                animate={controlsButtonLeft}
                initial={{ opacity: 1 }}
                onClick={prevPrestation}
            >
                <img src='chevron-left-solid.svg' alt="Previous" />
            </motion.button>

            <motion.div
                className="prestation_container"
                animate={prestationContainer}
                initial={{ x: 0 }}>
                <PrestationDetails
                    image={prestations[currentIndex].image}
                    title={prestations[currentIndex].title}
                    description={prestations[currentIndex].description}
                    className={prestations[currentIndex].className}
                    subtitle={prestations[currentIndex].subtitle}
                />
                <motion.button
                    className="next_projet"
                    animate={controlsButtonRight}
                    initial={{ opacity: 1 }}
                    onClick={nextPrestation}
                >
                    <img src='chevron-right-solid.svg' alt="Next" />
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default Carousel;
