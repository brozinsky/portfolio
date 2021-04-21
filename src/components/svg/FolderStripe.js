import React from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion';

const FolderStripe = () => {
    return (
        <Svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{
                delay: 1.5,
                duration: 1.5,
            }}
            width="274" height="115" viewBox="0 0 274 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="159" y1="114.814" x2="159" y2="18.7286" stroke="#444444" stroke-width="2" />
            <line x1="160" y1="113.814" x2="182.8" y2="113.814" stroke="#444444" stroke-width="2" />
            <line x1="182.094" y1="114.107" x2="187.794" y2="108.407" stroke="#444444" stroke-width="2" />
            <line x1="188.5" y1="108.114" x2="274" y2="108.114" stroke="#444444" stroke-width="2" />
            <line x1="273" y1="109.114" x2="273" y2="7.67311e-06" stroke="#444444" stroke-width="2" />
            <line x1="274" y1="1" x2="179.543" y2="0.999992" stroke="#444444" stroke-width="2" />
            <line x1="180.235" y1="0.721988" x2="160.692" y2="19.4506" stroke="#444444" stroke-width="2" />
            <line x1="-34.7559" y1="82.2929" x2="20.2441" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="-5.94539" y1="82.2929" x2="49.0546" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="22.8632" y1="82.2929" x2="77.8632" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="51.6738" y1="82.2929" x2="106.674" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="80.4823" y1="82.2929" x2="135.482" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="109.293" y1="82.2929" x2="164.293" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="138.103" y1="82.2929" x2="193.103" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="166.912" y1="82.2929" x2="221.912" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="195.723" y1="82.2929" x2="250.723" y2="27.2929" stroke="#444444" stroke-width="2" />
            <line x1="224.531" y1="82.2929" x2="245.484" y2="61.3405" stroke="#444444" stroke-width="2" />
        </Svg>
    )
}

const Svg = styled(motion.svg)`
position: absolute;
top: 79%;
left: -25px;
opacity: 0.6;
z-index: 0;
@media (max-width: 768px) {
display: none;
}
`

export default FolderStripe
