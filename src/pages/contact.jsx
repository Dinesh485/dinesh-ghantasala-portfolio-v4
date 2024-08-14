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
                     {/* <motion.form variants={fadeInVarients} action="#" className="mb-6 text-sm lg:text-base">
                        <div className="mb-6">
                           <label htmlFor="name" className="block mb-2  font-medium text-gray-900 dark:text-white">Your name</label>
                           <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
                        </div>
                        <div className="mb-6">
                           <label htmlFor="email" className="block mb-2  font-medium text-gray-900 dark:text-white">Your email</label>
                           <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>

                        <div className="mb-6">
                           <label htmlFor="message" className="block mb-2  font-medium text-gray-900 dark:text-white">Your message</label>
                           <textarea id="message" rows="4" className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
                     </motion.form> */}
                     <div className="grid lg:place-items-center">
                        <div className="space-y-5 text-gray-700 lg:space-y-6 lg:text-lg xl:space-y-7">
                           {contactInfo.map(item => {
                              return <motion.a variants={fadeInVarients} className="flex items-center" href={item.link} target="_blank" rel="noreferrer">
                                 {item.svg}
                                <div>
                                  <p className="ml-3 text-gray-600 dark:text-gray-400 text-sm">{item.label}</p>
                                  <p className="ml-3 dark:text-gray-300">{item.value}</p>
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