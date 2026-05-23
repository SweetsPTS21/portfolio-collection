export const pageVariants = {
    initial: {
        opacity: 0,
        y: 30,
        rotateX: 2,
        filter: "blur(6px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
    },
    exit: {
        opacity: 0,
        y: -24,
        rotateX: -2,
        filter: "blur(4px)",
    },
};

export const pageTransition = {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
};

export const sectionStagger = {
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08,
        },
    },
};

export const noteReveal = {
    initial: {
        opacity: 0,
        y: 24,
        rotate: -0.6,
        scale: 0.985,
    },
    animate: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.48,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const tabSlide = {
    initial: {
        opacity: 0,
        x: -18,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.36,
            ease: "easeOut",
        },
    },
};

export const cardHover = (index = 0) => ({
    y: -10,
    rotate: index % 2 === 0 ? -0.8 : 0.8,
    scale: 1.01,
    transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
    },
});
