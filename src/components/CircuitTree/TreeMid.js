
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const speed = 0.5;

const pathArray = [ //mid

    { d: "M1048.92 276.333L1099.55 244.536", delay: speed * 2, duration: speed, isReverse: true },
    { d: "M1099.55 245.536L1206 245.536", delay: speed, duration: speed, isReverse: true },
    { d: "M1048.92 276.333L350.162 276.333", delay: speed * 3, duration: speed * 3, isReverse: false }, //branch-0

    { d: "M350.161 276.333L308.082 236.328", delay: speed * 6, duration: speed, isReverse: false },
    { d: "M308.083 236.329L151.777 236.329", delay: speed * 7, duration: speed, isReverse: false }, //branch-0
    { d: "M151.776 236.329L101.402 183.19", delay: speed * 8, duration: speed, isReverse: false },
    { d: "M101.404 183.19L45.8457 183.19", delay: speed * 9, duration: speed, isReverse: false },
    { d: "M23.379 205.655L15.257 204.186L8.17173 199.779L3.2466 193.212L0.999999 185.263L1.69138 177.055L5.40672 169.624L11.5414 164.094L19.2315 161.07L27.5263 161.07L35.2164 164.094L41.3511 169.624L44.9802 177.055L45.7578 185.263L43.5112 193.212L38.4998 199.779L31.5008 204.186L23.379 205.655Z", delay: speed * 10, duration: speed, isReverse: true },

    { d: "M651 276L519 133", delay: speed * 11, duration: speed, isReverse: false }, //branch-1
    { d: "M519 133H285", delay: speed * 12, duration: speed, isReverse: false },
    { d: "M285.272 132.989L219.863 64.9024", delay: speed * 13, duration: speed, isReverse: false },
    { d: "M219.864 64.9016L163.701 64.9016", delay: speed * 14, duration: speed, isReverse: false },
    { d: "M163.702 64.9016L140.891 40.3627", delay: speed * 15, duration: speed, isReverse: false },
    { d: "M126.287 45.7197L118.165 44.1645L111.166 39.8443L106.155 33.2774L103.908 25.2419L104.686 17.0336L108.315 9.68914L114.45 4.07289L122.14 1.1349L130.434 1.1349L138.125 4.07289L144.259 9.68913L147.975 17.0336L148.666 25.2419L146.419 33.2774L141.494 39.8443L134.409 44.1645L126.287 45.7197Z", delay: speed * 16, duration: speed, isReverse: true },


    { d: "M215.025 277.628L255.549 236.327", delay: speed * 17, duration: speed, isReverse: true }, //branch-5
    { d: "M78.5059 277.628L215.025 277.628", delay: speed * 18, duration: speed, isReverse: true },
    { d: "M67.0104 290.107L61.0484 288.465L56.6417 284.059L55 278.01L56.6417 272.048L61.0484 267.642L67.0104 266L73.0585 267.642L77.4653 272.048L79.107 278.01L77.4653 284.059L73.0585 288.465L67.0104 290.107Z", delay: speed * 19, duration: speed, isReverse: true },

    { d: "M373.664 276.334L306.096 348.05", delay: speed * 21, duration: speed, isReverse: false }, //branch-3
    { d: "M306 348L270 348", delay: speed * 22, duration: speed, isReverse: false },
    { d: "M270 348L220 400", delay: speed * 23, duration: speed, isReverse: false },
    { d: "M220.295 400.238L142.186 400.238", delay: speed * 24, duration: speed, isReverse: false },
    { d: "M119.465 421.585L111.343 420.116L104.258 415.709L99.3328 409.143L97 401.193L97.7776 392.985L101.493 385.554L107.628 379.938L115.318 377L123.526 377L131.303 379.938L137.351 385.554L141.066 392.985L141.844 401.193L139.597 409.143L134.586 415.709L127.587 420.116L119.465 421.585Z", delay: speed * 25, duration: speed, isReverse: true },

    { d: "M586 276L473 399", delay: speed * 26, duration: speed, isReverse: false }, //branch-2
    { d: "M473 399L404 399", delay: speed * 27, duration: speed, isReverse: false },
    { d: "M404 399L282 519", delay: speed * 28, duration: speed, isReverse: false },
    { d: "M281.555 519.131L226.861 519.131", delay: speed * 29, duration: speed, isReverse: false },
    { d: "M226.863 519.131L196.621 551.187", delay: speed * 30, duration: speed, isReverse: false },
    { d: "M179.771 589.12L171.649 587.564L164.651 583.244L159.639 576.591L157.393 568.642L158.17 560.433L161.886 553.003L167.934 547.473L175.71 544.448L183.919 544.448L191.695 547.473L197.744 553.003L201.459 560.433L202.237 568.642L199.99 576.591L194.979 583.244L187.98 587.564L179.771 589.12Z", delay: speed * 31, duration: speed, isReverse: true },

]

const TreeMid = () => {
    return (
        <Tree width="1206" height="590" viewBox="0 0 1206 590" fill="none" xmlns="http://www.w3.org/2000/svg">
            {pathArray.map(path => {
                return (
                    <motion.path
                        style={path.isReverse ? { rotate: '180deg' } : ''}
                        initial={!path.isReceiver ? { pathLength: 0, pathLOffset: 1 } : { scale: 0 }}
                        animate={!path.isReceiver ? { pathLength: 1, pathLOffset: 0 } : { scale: 1 }}
                        transition={{
                            delay: path.delay,
                            duration: path.duration,
                            ease: 'linear'
                        }}
                        d={path.d}
                        stroke="#555"
                        stroke-width="0.5" />
                )
            })}
        </Tree>
    )
}

const Tree = styled.svg`
z-index: -1;
/* transform: translate(-50%,-50%) */
`

export default TreeMid