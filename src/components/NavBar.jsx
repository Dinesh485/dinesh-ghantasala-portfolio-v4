import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import CV from 'src/assets/files/Dinesh_Ghantasala.pdf'
import DarkModeToggle from "./DarkModeToggle"
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    useEffect(() =>{
       setMenuOpen(false)
    },[location.pathname])
    return (


        <nav className="bg-white dark:bg-gray-950 fixed w-full z-20  top-0 left-0 border-b border-gray-200 dark:border-gray-600  transition-colors duration-500">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:grid lg:grid-cols-3">
                <NavLink href="https://flowbite.com/" className="flex items-center">
                        <span className="self-center text-3xl font-semibold whitespace-nowrap text-blue-600 dark:text-white xl:text-5xl">DG</span>
                </NavLink>
                <div className="flex lg:order-2 items-center space-x-2 lg:justify-end">
                    <DarkModeToggle />
                    <a href = {CV} download type="button" className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download CV</a>
                    <button  onClick={() => setMenuOpen(!menuOpen)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                 <div   className={`items-center justify-between w-full lg:flex lg:order-1 lg:w-full lg:justify-center ${!menuOpen && 'hidden'} `}id="navbar-sticky">
                    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:w-full lg:max-w-xs lg:flex-row lg:justify-between lg:mt-0 lg:border-0 lg:dark:bg-transparent dark:bg-gray-800 lg:bg-transparent transition-colors duration-500 dark:border-gray-700">
                        <li>
                            <NavLink to= '/' className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }  >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to= '/about' className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to= '/projects' className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" }>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to= '/contact' className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" } >Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default NavBar