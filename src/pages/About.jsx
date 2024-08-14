import { motion } from 'framer-motion'
import { fadeInVarients, pageVarients } from 'src/constants/animationVariants'
import profileImage from 'src/assets/images/profile.webp'
import timelineData from 'src/constants/journey.json'
import skillsData from 'src/constants/skills'
import CircularProgress from 'src/components/CircularProgress'
const About = () => {
    return (
        <motion.div variants={pageVarients} initial={'hidden'} animate={'show'} exit={'exit'}  >
            <div className="py-20 pt-24  sm:py-16 sm:pt-24 lg:pt-32 lg:py-24 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <section>
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100  sm:text-4xl lg:text-5xl lg:leading-tight ">About Me</h1>
                        <div className="py-10  sm:py-16 lg:py-24">
                            <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                                <motion.div variants={fadeInVarients} className="md:flex md:items-center md:justify-center md:space-x-14">
                                    <div className="relative flex-shrink-0 w-48 h-48 mx-auto">
                                        <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                                        <img className="relative object-cover object-top w-48 h-48 rounded-full" src={profileImage} alt="" />
                                    </div>

                                    <div className="mt-10 md:mt-0">

                                        <p className="text-base leading-relaxed  text-gray-800 xl:text-lg dark:text-gray-200">I'm Dinesh Ghantasala from Eluru, Andhra Pradesh, India, with a Bachelor of Science degree in Computer Science from Sir C R Reddy College. As a MERN stack developer, I've experience in HTML, CSS, JavaScript, React, Express, and MongoDB. My passion for web development drives me to continually learn and explore new technologies, always aiming to create impactful and efficient web solutions. I'm dedicated to refining my craft and staying engaged with the latest industry trends.</p>


                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <section className=''>
                        <h2 className="text-2xl leading-tight text-black text-center  sm:text-3xl lg:text-4xl lg:leading-tight mb-9 dark:text-gray-100">Skills</h2>
                        <div className='flex flex-wrap items-center justify-center gap-5 mx-auto w-fit mb-10'>
                             {skillsData.map(skill => {
                                 return <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                 <CircularProgress progress={skill.progress} >
                                     {skill.svg}
                                 </CircularProgress>
                                 <p className = 'text-center mt-2 text-lg font-medium dark:text-gray-200'>{skill.title}</p>
                             </motion.div>
                             })}
                        </div>
                    </section>

                    <section className="py-10  sm:py-16 lg:py-24">
                        <h2 className="text-2xl leading-tight text-black  sm:text-3xl lg:text-4xl lg:leading-tight mb-9 dark:text-gray-100">My Journey</h2>
                        <ol className="relative border-l border-blue-300 dark:border-blue-900 ">
                            {timelineData.map((item, index) => (
                                <li>
                                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-[6.5px] "></div>
                                    <motion.div
                                    key={index}
                                    variants={fadeInVarients}
                                    initial={'hidden'}
                                    whileInView={'show'}
                                    viewport={{ amount: 'all' }}
                                    className="mb-10 ml-4"
                                >
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        {item.date}
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                                </li>
                            ))}
                        </ol>
                    </section>

                </div>
            </div>
        </motion.div>
    )
}

export default About