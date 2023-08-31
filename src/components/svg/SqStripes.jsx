import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';

const SqStripes = () => {
    return (
        <Svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
                delay: 1.5,
                duration: 1.5,
            }}
            width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.53866" y1="13.2885" x2="15.4274" y2="1.38388" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M2.20118 37.5596L35.7767 3.984" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M1.99997 59.5856L59.5856 2.00004" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <line x1="1.55852" y1="80.7228" x2="80.8454" y2="1.43594" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <line x1="1.54094" y1="102.567" x2="102.672" y2="1.43595" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M10.2363 116.826L117 10.0618" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M32.0196 116.868L116.97 31.9172" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M53.8868 116.825L116.993 53.7194" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M75.7129 116.825L116.974 75.5639" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
            <path d="M97.5508 116.81L116.968 97.3928" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
        </Svg>
    )
}

const Svg = styled(motion.svg)`
position: absolute;
top: 5%;
right: 3%;
opacity: 0.5;
z-index: 0;
@media (max-width: 768px) {
display: none;}
`

export default SqStripes
