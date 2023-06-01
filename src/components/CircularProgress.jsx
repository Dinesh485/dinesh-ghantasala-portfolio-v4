import {PropTypes} from "prop-types";
import {motion} from "framer-motion"

const CircularProgress = ({ progress, children }) => {
   

    const variants = {
        hidden: {
           pathLength: 0
        },
       show: {
         pathLength: progress/100,
         transition: {
            delay: 1,
            duration: 1,
            type: 'tween',
            ease: "easeInOut"
         }
       }
    }
    return (
        <div className=" w-fit relative  overflow-visible">
            <svg  className="w-full h-full absolute left-0 top-0 stroke-gray-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45.5"  strokeWidth="9" strokeLinecap="round" />
            </svg>
             <svg  className="w-full h-full absolute left-0 top-0 stroke-blue-600 -rotate-90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.circle variants={variants} animate = {'show'} initial = {'hidden'} cx="50" cy="50" r="45.5"  strokeWidth="9" strokeLinecap="round"  />
            </svg>

             {children}
        </div>
    );
};

CircularProgress.propTypes = {
    progress: PropTypes.number,
    children: PropTypes.element
}
export default CircularProgress;
