import { fadeInVarients, pageVarients } from "src/constants/animationVariants"
import { motion } from 'framer-motion'
import projects from 'src/constants/projects'
const Projects = () => {
    const variants = {
        hidden:{
            height: 0,
        },
        showChild: {
            height: 'auto',
            transition: {
                type:'tween',
                ease: "easeOut",
                duration: 0.2,
            }
        }
    }
    return (
        <motion.div variants={pageVarients} initial={'hidden'} animate={'show'} exit={'exit'}  >
            <div className="py-20 pt-24  sm:py-16 sm:pt-24 lg:pt-32 lg:py-24 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                      <section>
                      <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 text-center  sm:text-4xl lg:text-5xl lg:leading-tight ">Projects</h1>
                       <div className="grid md:grid-cols-2 gap-5 py-10  sm:py-16 lg:py-24">
                         {projects && projects.length> 0 && projects.map(project =>{
                             return (
                                <motion.a variants={fadeInVarients} initial = {'hidden'} animate = {'show'} whileHover = {'showChild'} href = {project.link} key ={project.name} target = '_blank' rel = 'noreferrer' className=" group relative w-full  overflow-hidden rounded-2xl">
                                     <img src = {project.image} alt = "project image" className="h-full  filter brightness-50 " />
                                     <div className="absolute bottom-0 left-0 text-white p-5 max-w-sm ">
                                         <p className="font-medium">{project.name}</p>
                                         <motion.p variants={variants} className="text-sm overflow-hidden">{project.desc}</motion.p>
                                     </div>
                                </motion.a>
                             )
                         })}
                       </div>
                      </section>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects