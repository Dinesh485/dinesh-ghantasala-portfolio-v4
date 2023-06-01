import { motion } from "framer-motion"
import { fadeInVarients, pageVarients } from "src/constants/animationVariants"
import contactInfo from 'src/constants/contactInfo.json'

const Contact = () => {
   return (
      <motion.div variants={pageVarients} initial={'hidden'} animate={'show'} exit={'exit'}  >
         <div className="py-20 pt-24  sm:py-16 sm:pt-24 lg:pt-32 lg:py-24 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
               <section>
                  <h1 className="text-3xl font-bold leading-tight text-gray-900   sm:text-4xl lg:text-5xl lg:leading-tight ">Contact</h1>
                  <div className="py-10  sm:py-16  grid lg:grid-cols-2 gap-10">
                     <motion.form variants={fadeInVarients} action="#" className="mb-6 text-sm lg:text-base">
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
                     </motion.form>
                     <div className="grid lg:place-items-center">
                        <div className="space-y-3 text-gray-700 lg:space-y-5 lg:text-lg xl:space-y-6">
                           <motion.a variants={fadeInVarients} className="flex items-center" href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 lg:w-12 fill-gray-700 " viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                              <span className="ml-3">{contactInfo.whatsapp}</span>
                           </motion.a>
                           <motion.a variants={fadeInVarients} className="flex items-center" href={`mailto:${contactInfo.email}`} target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 lg:w-12 fill-gray-700 " viewBox="0 0 24 24"><path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" /></svg>
                              <span className="ml-3">{contactInfo.email}</span>
                           </motion.a>
                           <motion.a variants={fadeInVarients} className="flex items-center" href={`https://www.linkedin.com/in/${contactInfo.linkedin}`} target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 lg:w-12 fill-gray-700 " viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" /></svg>
                              <span className="ml-3">{contactInfo.linkedin}</span>
                           </motion.a>
                           <motion.a variants={fadeInVarients} className="flex items-center" href={`https://facebook.com/${contactInfo.facebook}`} target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 lg:w-12 fill-gray-700 " viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" /></svg>
                              <span className="ml-3">{contactInfo.facebook}</span>
                           </motion.a>
                           <motion.a variants={fadeInVarients} className="flex items-center" href={`https://github.com/${contactInfo.github}`} target="_blank" rel="noreferrer">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 lg:w-12 fill-gray-700 " viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" /></svg>
                              <span className="ml-3">{contactInfo.github}</span>
                           </motion.a>
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