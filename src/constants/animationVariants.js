const pageVarients = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y:0,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        transition:{
            duration: 0.2
        }
    }
}
const fadeInVarients = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y:0,
        transition:{
            duration: 0.5,
            type: 'tween',
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        transition:{
            duration: 0.2
        }
    }
}

export  {pageVarients, fadeInVarients}