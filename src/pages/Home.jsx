import { NavLink } from 'react-router-dom'
import profileimage from 'src/assets/images/profile.webp'
import {motion } from 'framer-motion'
import { pageVarients,  fadeInVarients } from 'src/constants/animationVariants'
import DotsPattern from 'src/components/dotsPattern'
import ImageLoader from 'src/components/ImageLoader'
const Home = () => {
   

    
  return (
    <motion.div variants={pageVarients} initial = {'hidden'} animate = {'show'} exit = {'exit'}  >
        
        <section className="py-20 sm:py-16 lg:py-24 xl:pt-32 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                    <div className=" lg:mb-12 flex justify-center">
                          <div className="relative w-56 lg:w-72 xl:w-80  ">
                              <div className="absolute w-2/3 -right-[25%] -bottom-[25%] dark:hue-rotate-30" >
                                  <DotsPattern />
                              </div>
                              <div className="aspect-[2/3]  relative rounded-md"    >
                                  <ImageLoader src={profileimage} alt="profile picture" />
                              </div>
                              <div className="absolute bottom-[5%] -left-[30%] w-[125%]  ">
                                  <div className=" bg-blue-600 rounded-lg w-full">
                                      <div className="px-3 py-4 lg:px-5 lg:py-6">
                                          <div className="flex items-start">

                                              <blockquote className="ml-5">
                                                  <p className="text-sm font-medium text-white lg:text-base xl:text-lg">“Committed to Continuous Learning and Building Innovative Solutions”</p>
                                              </blockquote>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>

                    <div  className="2xl:pl-16">
                        <motion.h2 variants={fadeInVarients} className="text-3xl font-bold leading-tight text-black dark:text-gray-100 sm:text-4xl lg:text-5xl lg:leading-tight">Hi! <span className="text-4xl sm:text-6xl">👋</span> <br /> I&apos;m Dinesh</motion.h2>
                        <motion.p variants={fadeInVarients} className="text-xl leading-relaxed text-gray-900 dark:text-gray-300 mt-9">Experienced MERN stack developer skilled in crafting high-quality web applications. Passionate about learning, embracing challenges, and contributing to organizational success through innovation and collaboration.</motion.p>
                        <motion.p variants={fadeInVarients} className="mt-6 text-xl leading-relaxed text-gray-900 dark:text-gray-300">Learn more about me <NavLink to = '/contact' className='text-blue-500 underline'>here  </NavLink></motion.p>
                    </div>
                </div>
            </div>
        </section>



    </motion.div>
  )
}

export default Home