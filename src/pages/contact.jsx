import { motion } from "framer-motion"
import { fadeInVarients, pageVarients } from "src/constants/animationVariants"
import contactInfo from 'src/constants/contactInfo'

const Contact = () => {
   return (
      <motion.div variants={pageVarients} initial={'hidden'} animate={'show'} exit={'exit'}  >
         <div className="py-20 pt-24  sm:py-16 sm:pt-24 lg:pt-32 lg:py-24 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
               <section>
                  <h1 className="text-3xl font-bold leading-tight text-gray-900   sm:text-4xl lg:text-5xl lg:leading-tight dark:text-gray-100">Contact</h1>
                  <div className="py-10  sm:py-16  grid lg:grid-cols-1 gap-10">
                     <div className="">
                        <div className="gap-y-5 text-gray-800 dark:text-gray-200 max-w-screen-md  lg:text-lg  md:gap-y-7 grid md:grid-cols-2  ">
                           {contactInfo.map(item => {
                              return <motion.a variants={fadeInVarients} className="flex items-center" href={item.link} target="_blank" rel="noreferrer">
                                 {item.svg}
                                <div>
                                  <p className="ml-3 text-gray-600 dark:text-gray-400 text-sm">{item.label}</p>
                                  <p className="ml-3">{item.value}</p>
                                </div>
                              </motion.a>
                           })}
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </motion.div>

   )
}

export default Contact