
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const speed = 0.6;

const pathArray = [
    { d: "M874.908 248.634L983.001 248.634", delay: speed, duration: speed, isReverse: true }, //branch-0
    { d: "M825.916 296.452L874.908 247.634", delay: speed * 2, duration: speed, isReverse: true },
    { d: "M825.915 296.452L457.227 296.452", delay: speed * 3, duration: speed * 2, isReverse: false },
    { d: "M457 296L236 79", delay: speed * 5, duration: speed, isReverse: false },
    { d: "M236 79H77", delay: speed * 6, duration: speed, isReverse: false },
    { d: "M76.8737 79.0581L37.3867 39.4849", delay: speed * 7, duration: speed, isReverse: false },
    { d: "M22.785 44.8428L14.663 43.2876L7.66421 38.9673L2.65259 32.4005L0.406249 24.4514L1.18386 16.1564L4.81271 8.81192L10.9476 3.19567L18.6375 0.257943L26.9325 0.257942L34.6224 3.19567L40.7571 8.81192L44.3862 16.1564L45.1638 24.4514L42.9172 32.4005L37.9058 38.9673L30.9071 43.2876L22.785 44.8428Z", delay: speed * 8, duration: speed, isReverse: false, isReceiver: true },

    { d: "M428.109 267.767L428.109 198.816", delay: speed * 11, duration: speed, isReverse: false }, //branch-1
    { d: "M428.109 198.816L376.18 148.874", delay: speed * 12, duration: speed, isReverse: false },
    { d: "M367.885 152.243L361.837 150.601L357.43 146.195L355.875 140.146L357.43 134.184L361.837 129.778L367.885 128.136L373.934 129.778L378.34 134.184L379.895 140.146L378.34 146.195L373.934 150.601L367.885 152.243Z", delay: speed * 13, duration: speed, isReverse: false, isReceiver: true },

    // { d: "M264 171H68", delay: speed * 14, duration: speed, isReverse: false }, //branch-2
    // { d: "M45.3788 193.585L37.2567 192.029L30.258 187.709L25.2463 181.142L23 173.193L23.7776 164.898L27.4065 157.554L33.5414 151.938L41.2313 149L49.5263 149L57.2162 151.938L63.3508 157.554L66.9799 164.898L67.7575 173.193L65.5109 181.142L60.4996 187.709L53.5008 192.029L45.3788 193.585Z", delay: speed * 15, duration: speed, isReverse: false, isReceiver: true },

    { d: "M179.092 79.0581L179.092 54.1735", delay: speed * 16, duration: speed, isReverse: false }, //branch-3
    { d: "M179.091 54.1726L151.096 25.2273", delay: speed * 17, duration: speed, isReverse: false },
    { d: "M143.01 29.1067L136.962 27.465L132.555 23.0585L131 17.0101L132.555 11.0481L136.962 6.64143L143.01 4.99998L149.059 6.64143L153.465 11.0481L155.02 17.0101L153.465 23.0585L149.059 27.465L143.01 29.1067Z", delay: speed * 18, duration: speed, isReverse: false, isReceiver: true },

]

const TreeTop = () => {
    return (
        <Tree width="983" height="297" viewBox="0 0 983 297" fill="none" xmlns="http://www.w3.org/2000/svg">
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
transform: translate(0,200px);

`

export default TreeTop