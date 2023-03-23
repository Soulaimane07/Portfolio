import { useState } from 'react'
import Resume from './Resume'
import './Navbar.css'
import '../../AppR.css'
import { Link, useLocation } from 'react-router-dom'

function Nav() {

    const links = [
        { 'title':'A propos', 'link':'#about'},
        { 'title':'Expériences', 'link':'#experiences'},
        { 'title':'Travail', 'link':'#work'},
        { 'title':'Contacter', 'link':'#contact'},
    ]

    const [navbar, setNavbar] = useState(false)
    const [resume, setResume] = useState(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeBackground)
    const location = useLocation()

    console.log(location);

  return (
    <>
    <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            
            {location.pathname !== '/works' 
            ?
                <a href="#" className="logo flex items-center">
                    SOULAIMANE OUHMIDA
                </a>
            :
                <Link to='/' className="logo flex items-center">
                    SOULAIMANE OUHMIDA
                </Link>
            }
            
            {location.pathname !== '/works' &&
            <>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {links.map((link,key)=>(
                            <a href={link.link} key={key}>
                                <a href={links.link} className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                    {link.title}
                                </a>
                            </a>
                        ))}
                        <button onClick={()=> setResume(true)} className="button">Obtenir le CV</button>
                    </ul>
                </div>
            </>
            }
        </div>
    </nav>
    {resume && <Resume setResume={setResume} /> }
    </>
  )
}

export default Nav