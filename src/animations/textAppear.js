import React from 'react'
import { motion } from 'framer-motion';

const sentence = {
    initial: { opacity: 1 },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.15,
        }
    }
}

const letter = {
    initial: { display: 'none', y: 50 },
    animate: {
        display: 'inline',
        y: 0,
    }
}

const cursor = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
    },
}


export const TextAppear = ({ text }) => {
    return (
        <motion.h1
            variants={sentence}
            initial='initial'
            animate='animate'
            className='header-title'
        >
            {
                text.split('').map((char, index) => {
                    return (
                        <motion.span key={char + '-' + index} variants={letter}>
                            {char}
                        </motion.span>
                    )
                })
            }
            <motion.span
                variants={cursor}
                initial='initial'
                animate='animate'
                transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >_</motion.span>
        </motion.h1>
    )
}





