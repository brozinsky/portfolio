export const titleAnim = {
    initial: { y: 200 },
    animate: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut'
        }
    }
}

export const appearAnim = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
}

export const textFromTop = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}