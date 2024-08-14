import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import CV from 'src/assets/files/Dinesh_Ghantasala.pdf'
import DarkModeToggle from "./DarkModeToggle"
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)
    useEffect(() =>{
       setMenuOpen(false)
    },[location.pathname])
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    const navLinks = [
        {
            label: 'Home',
            to: '/'
        },
        {
            label: 'About',
            to: '/about'
        },
        {
            label: 'Projects',
            to: '/projects'
        },
        {
            label: 'Contact',
            to: '/contact'
        },
    ]
    return (


        <nav className={"bg-white dark:bg-gray-950 fixed w-full z-20  top-0 left-0 transition-colors duration-500 " +( scrolled ? "shadow-lg" : "")}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:grid lg:grid-cols-3 lg:py-2">
                <NavLink to = '/' className="flex items-center">
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-blue-700 dark:text-blue-500  xl:text-5xl">DG</span>
                </NavLink>
                <div className="flex lg:order-2 items-stretch  space-x-2 lg:justify-end">
                    <DarkModeToggle />
                    <a href = {CV} download type="button" className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <span><span className="hidden md:inline-block">Download </span> CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current ml-2" viewBox="0 0 24 24"><path d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092zm-4 10h3v-4h2v4h3l-4 4-4-4z"/></svg>
                    </a>
                    <button  onClick={() => setMenuOpen(!menuOpen)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                 <div   className={`items-center justify-between w-full lg:flex lg:order-1 lg:w-full lg:justify-center ${!menuOpen && 'hidden'} `}id="navbar-sticky">
                    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:w-full lg:max-w-xs lg:flex-row lg:justify-between lg:mt-0 lg:border-0 lg:dark:bg-transparent dark:bg-gray-800 lg:bg-transparent transition-colors duration-500 dark:border-gray-700">
                        {
                            navLinks.map(link => {
                                return <li>
                                    <NavLink to={link.to} className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"}  >
                                        {link.label}
                                    </NavLink>
                                </li>
                            })
                        } 
                       
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default NavBar