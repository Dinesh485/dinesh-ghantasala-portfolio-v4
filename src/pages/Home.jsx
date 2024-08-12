import { NavLink } from 'react-router-dom'
import profileimage from 'src/assets/images/profile.webp'
import {motion } from 'framer-motion'
import { pageVarients,  fadeInVarients } from 'src/constants/animationVariants'
import DotsPattern from 'src/components/dotsPattern'
const Home = () => {
   

    
  return (
    <motion.div variants={pageVarients} initial = {'hidden'} animate = {'show'} exit = {'exit'}  >
        
        <section className="py-20 sm:py-16 lg:py-24 xl:pt-32 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                    <div className="relative lg:mb-12">
                        <div className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4 dark:hue-rotate-30" >
                            <DotsPattern />
                        </div>
                        <div className="pl-12 pr-6 ">
                            <img className="relative max-h-[600px] mx-auto" src={profileimage} alt=""   />
                        </div>
                        <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                            <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                                <div className="px-3 py-4 sm:px-5 sm:py-8">
                                    <div className="flex items-start">
                                        
                                        <blockquote className="ml-5">
                                            <p className="text-sm font-medium text-white sm:text-lg">“Committed to Continuous Learning and Building Innovative Solutions”</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  className="2xl:pl-16">
                        <motion.h2 variants={fadeInVarients} className="text-3xl font-bold leading-tight text-black dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight">Hi! <span className="text-4xl sm:text-6xl">👋</span> <br /> I&apos;m Dinesh</motion.h2>
                        <motion.p variants={fadeInVarients} className="text-xl leading-relaxed text-gray-900 dark:text-gray-300 mt-9">Talented MERN app developer with a passion for crafting exceptional web applications. Continuously learning and dedicated to delivering high-quality solutions. Embracing challenges with humility and a collaborative mindset. Eager to contribute my skills to drive organizational success.</motion.p>
                        <motion.p variants={fadeInVarients} className="mt-6 text-xl leading-relaxed text-gray-900 dark:text-gray-300">Learn more about me <NavLink to = '/contact' className='text-blue-500 underline'>here  </NavLink></motion.p>
                    </div>
                </div>
            </div>
        </section>



    </motion.div>
  )
}

export default Home