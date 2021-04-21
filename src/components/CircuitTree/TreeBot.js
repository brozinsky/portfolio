import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const speed = 0.2;

const pathArray = [
    { d: "M817.785 48.2178L924.236 48.2178", delay: speed, duration: speed, isReverse: true }, //branch-0
    { d: "M769.917 1.1274L817.784 48.2178", delay: speed * 2, duration: speed / 2, isReverse: true },

    { d: "M769.917 1.12816L401.229 1.12817", delay: speed * 2.5, duration: speed * 2 }, //branch-5
    { d: "M401.227 1.12866L281.557 122.181", delay: speed * 4.5, duration: speed },
    { d: "M281.558 122.181L234.381 122.181", delay: speed * 5.5, duration: speed / 2 },
    { d: "M234.38 122.18L188.326 166.506", delay: speed * 6, duration: speed / 2 },
    { d: "M188.326 166.506L188.326 225.348", delay: speed * 6.5, duration: speed / 2 },
    { d: "M188.327 225.349L151.605 260.948", delay: speed * 7, duration: speed / 2 },
    { d: "M133.547 296.805L125.425 295.336L118.34 290.929L113.415 284.362L111.168 276.413L111.859 268.205L115.575 260.774L121.709 255.244L129.399 252.22L137.694 252.22L145.384 255.244L151.519 260.774L155.148 268.205L155.926 276.413L153.679 284.362L148.668 290.929L141.669 295.336L133.547 296.805Z", delay: speed * 13, duration: speed / 2, isReceiver: true }, //branch-5

    { d: "M198.609 156.656L144.52 156.656", delay: speed * 7.5, duration: speed / 2 }, //branch-4
    { d: "M144.519 156.655L103.477 196.747", delay: speed * 8, duration: speed / 2 },
    { d: "M103.477 196.749L103.477 230.187", delay: speed * 8.5, duration: speed / 2 },
    { d: "M103.477 230.188L57.1641 276.933", delay: speed * 9, duration: speed / 2 },
    { d: "M57.1641 276.933L45.5859 276.933", delay: speed * 9.5, duration: speed / 2 },
    { d: "M23.121 299.484L14.9989 297.928L8.00015 293.608L2.98879 286.955L0.742187 279.006L1.5198 270.797L5.14891 263.366L11.2836 257.837L18.9737 254.812L27.2685 254.812L34.9584 257.837L41.0933 263.366L44.7221 270.797L45.4997 279.006L43.2534 286.955L38.2418 293.608L31.243 297.928L23.121 299.484Z", delay: speed * 13, duration: speed / 2, isReceiver: true }, //branch-4

    { d: "M222.543 133.587L124.561 133.587", delay: speed * 10, duration: speed / 2 }, //branch-3
    { d: "M124.561 133.587L67.1016 191.824", delay: speed * 10.5, duration: speed / 2 },
    { d: "M124.561 133.587L67.1016 191.824", delay: speed * 11, duration: speed / 2 },
    { d: "M58.2015 212.041L52.2396 210.399L47.8331 205.993L46.1914 199.944L47.8331 193.982L52.2396 189.576L58.2015 187.934L64.2499 189.576L68.6567 193.982L70.2984 199.944L68.6567 205.993L64.2499 210.399L58.2015 212.041Z", delay: speed * 13, duration: speed / 2, isReceiver: true }, //branch-3

    { d: "M388.354 14.1755L316.725 14.1755", delay: speed * 11.5, duration: speed / 2 }, //branch-1
    { d: "M316.724 14.1753L288.643 42.0841", delay: speed * 12, duration: speed / 2 },
    { d: "M279.743 62.217L273.781 60.5753L269.374 56.1689L267.732 50.1204L269.374 44.1585L273.781 39.752L279.743 38.1103L285.791 39.752L290.198 44.1585L291.839 50.1204L290.198 56.1689L285.791 60.5753L279.743 62.217Z", delay: speed * 13, duration: speed / 2, isReceiver: true }, //branch-1

    { d: "M326.834 76.3875L326.834 124.86", delay: speed * 12.5, duration: speed / 2 }, //branch-2
    { d: "M326.833 124.859L275.682 177.652", delay: speed * 13, duration: speed / 2 },
    { d: "M257.623 213.512L249.501 212.043L242.416 207.636L237.49 201.069L235.244 193.12L235.935 184.912L239.651 177.481L245.786 171.951L253.475 168.927L261.77 168.927L269.46 171.951L275.595 177.481L279.224 184.912L280.002 193.12L277.755 201.069L272.744 207.636L265.745 212.043L257.623 213.512Z", delay: speed * 13, duration: speed / 2, isReceiver: true }, //branch-2

]

const TreeBot = () => {
    return (
        <Tree width="925" height="300" viewBox="0 0 925 300" fill="none" xmlns="http://www.w3.org/2000/svg">
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
transform: translate(0,-250px);
`

export default TreeBot
