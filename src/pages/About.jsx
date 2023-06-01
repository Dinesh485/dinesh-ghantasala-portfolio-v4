import { motion } from 'framer-motion'
import { fadeInVarients, pageVarients } from 'src/constants/animationVariants'
import profileImage from 'src/assets/images/profile.jpg'

import CircularProgress from 'src/components/CircularProgress'
const About = () => {
    return (
        <motion.div variants={pageVarients} initial={'hidden'} animate={'show'} exit={'exit'}  >
            <div className="py-20 pt-24  sm:py-16 sm:pt-24 lg:pt-32 lg:py-24 ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <section>
                        <h1 className="text-3xl font-bold leading-tight text-gray-900  sm:text-4xl lg:text-5xl lg:leading-tight ">About Me</h1>
                        <div className="py-10  sm:py-16 lg:py-24">
                            <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                                <motion.div variants={fadeInVarients} className="md:flex md:items-center md:justify-center md:space-x-14">
                                    <div className="relative flex-shrink-0 w-48 h-48 mx-auto">
                                        <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
                                        <img className="relative object-cover object-top w-48 h-48 rounded-full" src={profileImage} alt="" />
                                    </div>

                                    <div className="mt-10 md:mt-0">

                                        <p className="text-base leading-relaxed  text-gray-800 xl:text-lg">I&apos;m <span className='font-bold text-xl'>Dinesh Ghantasala</span>, hailing from Eluru, Andhra Pradesh, India. I have a Bachelor of Science degree in Computer Science from Sir C R Reddy College. With a passion for web development, I specialize in HTML, CSS, JavaScript, and React. Seeking an exciting job opportunity to apply and expand my expertise as a MERN stack developer. Committed to continuous learning and eager to contribute to a dynamic organization.</p>


                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <section className=''>
                        <h2 className="text-2xl leading-tight text-black text-center  sm:text-3xl lg:text-4xl lg:leading-tight mb-9">Skills</h2>
                        <div className='flex flex-wrap items-center justify-center gap-5 mx-auto w-fit mb-10'>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={100} >
                                    <svg className='w-20 h-20 p-5' viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2792 3.82239H4.72119L6.62337 25.3804L15.5002 27.9166L24.377 25.3804L26.2792 3.82239Z" fill="#E65100"></path><path d="M15.5 5.72449V25.9509L22.6014 23.9219L24.1866 5.72449H15.5Z" fill="#FF6D00"></path><path d="M15.5 16.5036V13.9674H20.9529L20.5091 21.259L15.5 22.9076V20.2445L18.0996 19.3569L18.2899 16.5036H15.5ZM21.1431 11.4311L21.3333 8.8949H15.5V11.4311H21.1431Z" fill="white"></path><path d="M15.5002 20.2445V22.9076L10.4911 21.259L10.2375 17.7717H12.7737L12.9005 19.3569L15.5002 20.2445ZM12.3933 11.4311H15.5002V8.8949H9.73022L10.1741 16.5036H15.5002V13.9674H12.5835L12.3933 11.4311Z" fill="#EEEEEE"></path></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>HTML</p>
                            </motion.div>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={100} >
                                    <svg className='w-20 h-20 p-5' viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2792 3.99622H4.72119L6.62337 25.5542L15.5002 28.0904L24.377 25.5542L26.2792 3.99622Z" fill="#0277BD"></path><path d="M15.5 5.89832V26.1248L22.6014 24.0958L24.1866 5.89832H15.5Z" fill="#039BE5"></path><path d="M21.2699 9.06873H15.5V11.605H18.6069L18.4167 14.1412H15.5V16.6774H18.2899L18.0996 19.5307L15.5 20.4184V23.0814L20.5091 21.4329L20.9529 14.1412L21.2699 9.06873Z" fill="white"></path><path d="M15.5001 9.06873V11.605H9.85697L9.66675 9.06873H15.5001ZM12.5834 14.1412L12.7102 16.6774H15.5001V14.1412H12.5834ZM12.837 17.9455H10.3008L10.491 21.4329L15.5001 23.0814V20.4184L12.9004 19.5307L12.837 17.9455Z" fill="#EEEEEE"></path></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>CSS</p>
                            </motion.div>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={90} >
                                    <svg className='w-20 h-20 p-5' viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.08716 27.2825V4.45642H26.9132V27.2825H4.08716Z" fill="#FFD600"></path><path d="M19.0114 21.5425C19.4502 22.2552 19.927 22.938 20.9371 22.938C21.7854 22.938 22.2305 22.5164 22.2305 21.9331C22.2305 21.235 21.7702 20.987 20.8369 20.5806L20.3252 20.3625C18.8485 19.736 17.8663 18.9511 17.8663 17.293C17.8663 15.7649 19.0362 14.6021 20.8641 14.6021C22.1659 14.6021 23.1011 15.0529 23.7757 16.2335L22.1817 17.2524C21.8311 16.626 21.4519 16.3793 20.8641 16.3793C20.2643 16.3793 19.8845 16.7579 19.8845 17.2524C19.8845 17.8637 20.265 18.111 21.1431 18.4895L21.6548 18.7076C23.3953 19.4488 24.3768 20.2059 24.3768 21.9077C24.3768 23.7414 22.9286 24.7464 20.9846 24.7464C19.0831 24.7464 18.0033 23.7921 17.4022 22.6109L19.0114 21.5425ZM11.6652 21.5945C11.9861 22.1689 12.4737 22.6109 13.1749 22.6109C13.8458 22.6109 14.2319 22.3458 14.2319 21.3155V14.6014H16.3452V21.6401C16.3452 23.775 15.1069 24.7464 13.2986 24.7464C11.6646 24.7464 10.4853 23.6393 10.0046 22.6109L11.6652 21.5945Z" fill="#000001"></path></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>JavaScript</p>
                            </motion.div>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={90} >
                                    <svg className='w-20 h-20 p-5' viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_9_248)"><path d="M21.9716 15.6208C22.0423 7.44176 19.3079 1.01389 15.7573 0.983179C12.2067 0.952472 9.36161 7.33209 9.29087 15.5111C9.22014 23.6902 11.9545 30.1181 15.5051 30.1488C19.0557 30.1795 21.9008 23.7998 21.9716 15.6208ZM10.5589 15.5221C10.628 7.53327 13.2736 2.22986 15.7464 2.25125C18.2191 2.27263 20.7726 7.621 20.7035 15.6098C20.6344 23.5987 17.9888 28.9021 15.5161 28.8807C13.0433 28.8593 10.4899 23.5109 10.5589 15.5221Z" fill="#397880"></path><path d="M28.741 10.036C28.7465 9.40196 28.6241 8.89363 28.3114 8.38366C26.563 5.26154 19.6449 6.02602 12.5086 10.0224C9.19521 11.896 6.38517 14.2178 4.59014 16.485C2.66665 18.9413 2.07683 21.1554 2.95131 22.6848C3.82525 24.2776 6.03944 24.8674 9.1495 24.5138C12.0693 24.1586 15.5041 22.9202 18.8175 21.0466C22.131 19.173 24.941 16.8512 26.736 14.584C28.0184 12.9465 28.7295 11.3675 28.741 10.036ZM3.78927 21.1069C3.79804 20.0924 4.38019 18.7659 5.53406 17.3174C7.2646 15.1765 9.94673 12.9804 13.1328 11.1692C20.0783 7.23452 26.0415 6.90564 27.2281 9.00838C27.8528 10.0917 27.2668 11.8621 25.7282 13.8144C23.9976 15.9553 21.3155 18.1514 18.1294 19.9627C14.9433 21.774 11.6993 22.9507 8.9697 23.3075C6.43083 23.6026 4.65882 23.2068 4.03411 22.1235C3.91004 21.8054 3.78598 21.4873 3.78927 21.1069Z" fill="#397880"></path><path d="M28.6428 21.3853C28.6702 18.2151 24.842 13.6166 18.8483 10.1407C11.7828 5.95809 4.87895 5.07407 3.07678 8.16549C1.27462 11.2569 5.34759 16.872 12.4131 21.0547C15.6937 22.9853 19.1065 24.283 22.0197 24.6886C25.1227 25.1593 27.2839 24.5439 28.2486 22.9671C28.5066 22.462 28.6378 21.9559 28.6428 21.3853ZM4.14916 8.80885C5.37192 6.72695 11.3286 7.15892 18.205 11.2131C25.0814 15.2673 28.3356 20.2413 27.1129 22.3232C26.4695 23.3955 24.6909 23.7606 22.1575 23.4217C19.4345 23.0177 16.2113 21.785 13.057 19.9189C6.1806 15.8647 2.9264 10.8907 4.14916 8.80885Z" fill="#397880"></path><path d="M18.1673 15.5879C18.1552 16.9886 17.0099 18.1142 15.6092 18.1021C14.2085 18.09 13.0829 16.9447 13.095 15.5441C13.1071 14.1434 14.2524 13.0178 15.6531 13.0299C17.0538 13.042 18.1794 14.1873 18.1673 15.5879Z" fill="#397880"></path></g><defs><clipPath id="clip0_9_248"><rect width="30.4348" height="30.4348" fill="white" transform="matrix(-0.00864819 0.999963 0.999963 0.00864819 0.545898 0.217529)"></rect></clipPath></defs></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>React.js</p>
                            </motion.div>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={100} >
                                    <svg className='w-20 h-20 p-5' viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8043 0.478271C11.7463 0.478271 9.2101 2.50726 8.19561 6.56523C9.71735 4.53624 11.4927 3.77537 13.5217 4.28262C14.6793 4.57203 15.5068 5.41186 16.4226 6.34153C17.9146 7.85594 19.6414 9.60871 23.413 9.60871C27.471 9.60871 30.0072 7.57972 31.0217 3.52175C29.5 5.55074 27.7246 6.3116 25.6956 5.80436C24.538 5.51495 23.7105 4.67512 22.7947 3.74545C21.3027 2.23103 19.5759 0.478271 15.8043 0.478271ZM8.19561 9.60871C4.13764 9.60871 1.60141 11.6377 0.586914 15.6957C2.10865 13.6667 3.88402 12.9058 5.913 13.4131C7.07065 13.7025 7.89808 14.5423 8.81394 15.472C10.3059 16.9864 12.0327 18.7391 15.8043 18.7391C19.8623 18.7391 22.3985 16.7102 23.413 12.6522C21.8913 14.6812 20.1159 15.442 18.0869 14.9348C16.9293 14.6454 16.1018 13.8055 15.186 12.8759C13.694 11.3615 11.9672 9.60871 8.19561 9.60871Z" fill="url(#paint0_linear_9_255)"></path><defs><linearGradient id="paint0_linear_9_255" x1="-0.258497" y1="6.32175" x2="26.0269" y2="21.4773" gradientUnits="userSpaceOnUse"><stop stopColor="#2298BD"></stop><stop offset="1" stopColor="#0ED7B5"></stop></linearGradient></defs></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>TailwindCSS</p>
                            </motion.div>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={90} >
                                    <svg className='w-20 h-20 p-5' xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 32 32" width="32"><path d="m23.749 30.005c-.119.063-.109.083.005.025.037-.015.068-.036.095-.061 0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016.036-.021.068-.041.068-.047 0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016.037-.021.068-.043.068-.048 0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zm-9.563-29.536c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208-.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792-.057.125-.151.229-.276.287-.099.047-.188.057-.661.057h-.541l-.141-.088c-.088-.057-.161-.136-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125c.063-.077.141-.14.229-.187.131-.063.183-.073.724-.073.635 0 .74.025.907.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083c1.219-.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328-.871-6.011-5.147-11.057-10.943-12.928-1.084-.343-2.199-.577-3.328-.697-.303-.031-2.371-.068-2.631-.041zm6.547 9.677c.151.072.265.208.317.364.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204.047-.167.161-.307.313-.395.124-.063.172-.068.667-.068.463 0 .541.005.645.063z" /></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>Next.js</p>
                            </motion.div>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={70} >
                                    <svg className='w-20 h-20 p-5' viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.9013 16.3869C26.8891 16.6443 26.263 16.3983 25.7013 15.5548L21.7065 10.0278L21.1291 9.2626L16.4639 15.573C15.9308 16.3322 15.3717 16.6626 14.3769 16.3939L20.3508 8.37477L14.7891 1.1313C15.7456 0.945209 16.4065 1.03999 16.9935 1.89651L21.1369 7.49217L25.3108 1.92695C25.8456 1.16782 26.4204 0.879122 27.3804 1.15912L25.2239 4.01825L22.3022 7.8226C21.9543 8.25738 22.0022 8.55477 22.3222 8.97477L27.9013 16.3869ZM0.0821518 8.24086L0.570847 5.83738C1.90128 1.08086 7.35346 -0.895661 11.1135 2.04347C13.3108 3.77217 13.8569 6.21738 13.7482 8.95651H1.36215C1.17606 13.8869 4.72476 16.8626 9.24911 15.3443C10.8361 14.8113 11.7708 13.5687 12.2387 12.0139C12.4761 11.2348 12.8691 11.113 13.6013 11.3356C13.2274 13.28 12.3839 14.9043 10.6013 15.9209C7.9378 17.4426 4.13606 16.9504 2.13606 14.8356C0.94476 13.6087 0.452587 12.0539 0.231717 10.3913C0.196934 10.1165 0.127369 9.85477 0.0751953 9.5913C0.079833 9.14144 0.0821518 8.69159 0.0821518 8.24173V8.24086ZM1.38476 7.91043H12.5778C12.5048 4.34521 10.2848 1.81304 7.25085 1.7913C3.92041 1.76521 1.52911 4.23738 1.38476 7.91043Z" fill="black"></path></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>Express.js</p>
                            </motion.div>
                            <motion.div variants={fadeInVarients} className = 'flex flex-col items-center justify-center'>
                                <CircularProgress progress={70} >
                                    <svg className='w-20 h-20 p-5' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.401 11.9258C27.401 24.924 15.988 28.8551 15.988 28.8551C15.988 28.8551 4.57495 24.924 4.57495 11.9258C4.57495 10.3406 4.70176 9.0091 4.82857 7.9312C5.01879 6.34606 6.09669 5.07794 7.61843 4.69751C9.58401 4.12686 12.6909 3.4928 15.988 3.4928C19.2851 3.4928 22.392 4.12686 24.421 4.69751C25.9427 5.07794 27.0206 6.40946 27.2108 7.9312C27.2742 9.0091 27.401 10.404 27.401 11.9258Z" fill="#5D4037"></path><path d="M15.988 5.39497C19.0949 5.39497 22.0115 6.02903 23.9137 6.53628C24.6746 6.72649 25.1818 7.36055 25.3086 8.18483C25.4355 9.38954 25.4989 10.6577 25.4989 11.9258C25.4989 21.8171 18.2072 25.8116 15.988 26.7627C13.7688 25.7482 6.47712 21.7537 6.47712 11.9258C6.47712 10.6577 6.54053 9.38954 6.66734 8.18483C6.73075 7.36055 7.3014 6.72649 8.06227 6.53628C9.96444 6.02903 12.8811 5.39497 15.988 5.39497ZM15.988 3.4928C12.6909 3.4928 9.58401 4.12686 7.55502 4.69751C6.09669 5.07794 4.95539 6.40946 4.82857 7.9312C4.70176 9.0091 4.57495 10.404 4.57495 11.9258C4.57495 24.924 15.988 28.8551 15.988 28.8551C15.988 28.8551 27.401 24.924 27.401 11.9258C27.401 10.3406 27.2742 9.0091 27.1474 7.9312C26.9572 6.34606 25.8793 5.07794 24.3576 4.69751C22.392 4.12686 19.2851 3.4928 15.988 3.4928Z" fill="#4CAF50"></path><path d="M15.3538 18.7102H16.6219V23.7827H15.3538V18.7102Z" fill="#DCEDC8"></path><path d="M15.9879 7.29712C15.9879 7.29712 12.1836 10.4674 12.1836 15.5399C12.1836 18.837 14.276 20.9294 15.3539 21.8805L15.9879 19.9783L16.622 21.8805C17.6999 20.9294 19.7923 18.837 19.7923 15.5399C19.7923 10.4674 15.9879 7.29712 15.9879 7.29712Z" fill="#4CAF50"></path><path d="M15.9879 7.29712C15.9879 7.29712 12.1836 10.4674 12.1836 15.5399C12.1836 18.837 14.276 20.9294 15.3539 21.8805L15.9879 19.9783V7.29712Z" fill="#81C784"></path></svg>
                                </CircularProgress>
                                <p className = 'text-center mt-2 text-lg font-medium'>MongoDB</p>
                            </motion.div>
                        </div>
                    </section>

                    <section className="py-10  sm:py-16 lg:py-24">
                        <h2 className="text-2xl leading-tight text-black  sm:text-3xl lg:text-4xl lg:leading-tight mb-9">My Journey</h2>
                        <ol className="relative border-l border-blue-300 dark:border-gray-700">
                            <motion.li variants={fadeInVarients} initial = {'hidden'} whileInView = {'show'} viewport={{amount: 'some'}} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2019</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">From Hobby to Passion: Discovering the Joy of Coding in 12th Grade</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    During my 12th grade, I embarked on a journey that would change my life forever. What started as a mere hobby quickly transformed into a deep-rooted passion for coding. The thrill of solving problems, creating something from scratch, and seeing the results firsthand ignited a fire within me.
                                </p>
                            </motion.li>
                            <motion.li variants={fadeInVarients} initial = {'hidden'} whileInView = {'show'} viewport={{amount: 'some'}} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2019</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">College Days: Practicing, Projects, and Passionate Pursuits</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Throughout my college days, I immersed myself in the world of programming. I dedicated countless hours to honing my skills, embracing every opportunity to practice and expand my knowledge. It was during this time that I undertook various projects, applying what I had learned and challenging myself to push the boundaries of my abilities.
                                </p>
                            </motion.li>
                            <motion.li variants={fadeInVarients} initial = {'hidden'} whileInView = {'show'} viewport={{amount: 'some'}} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Octobar 2020</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Freelancing Adventures: HTML, CSS, JS, and TailwindCSS</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    As I continued to grow as a developer, I ventured into the world of freelancing. Specializing in HTML, CSS, and JavaScript, with a particular focus on the versatile TailwindCSS framework, I collaborated with clients to bring their visions to life. This freelancing experience allowed me to gain practical experience, refine my coding skills, and learn the importance of meeting client expectations.
                                </p>
                            </motion.li>
                            <motion.li variants={fadeInVarients} initial = {'hidden'} whileInView = {'show'} viewport={{amount: 'some'}} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Leveling Up with React: Expanding Skills as a Freelancer</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Following the completion of my college education, I embarked on a new chapter as a freelance developer, with React as my primary focus. Engaging in various React projects, I honed my expertise in this powerful JavaScript library. Working independently, I faced new challenges head-on, further refining my problem-solving abilities and expanding my knowledge of frontend development.
                                </p>
                            </motion.li>
                            <motion.li variants={fadeInVarients} initial = {'hidden'} whileInView = {'show'} viewport={{amount: 'some'}} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Present</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Seeking the Next Chapter: Eager to Contribute at a Company</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Now, with a strong foundation and a wealth of experiences behind me, I am eager to embark on the next stage of my career. I am actively seeking an opportunity to join a forward-thinking company, where I can contribute my skills, collaborate with a talented team, and continue growing as a MERN stack developer. I am ready to take on new challenges, make a meaningful impact, and thrive in a dynamic and innovative work environment.
                                </p>
                            </motion.li>



                        </ol>
                    </section>

                </div>
            </div>
        </motion.div>
    )
}

export default About