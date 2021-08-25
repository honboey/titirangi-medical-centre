import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function MobileNavigation() {
    const [navOpen, setNavOpen] = useState(false);
    function toggleNav() {
        console.log(navOpen)
        return setNavOpen(!navOpen)
    }

    return (
        <div className="lg:hidden">
            {/* Hamburger menu button */}
            <button onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Opened nav menu */}
            <nav className={navOpen ?
                "bg-black h-screen w-screen z-10 fixed inset-0 p-4 transition-all duration-300 " :
                "bg-black h-screen w-screen z-10 fixed inset-0 p-4 transition-all  duration-300 left-full"}>
                <div class="flex justify-between">
                    <button onClick={toggleNav} className="flex w-3/4 items-center mb-4">
                        <Link to="/" className="w-1/6 mr-4"><StaticImage src="../images/logo-rev.png" alt="" /></Link>
                        <Link to="/" className="no-underline text-tmc-green"><h1 className="font-display md:text-xl">Titirangi Medical Centre</h1></Link>
                    </button>
                    <button onClick={toggleNav} className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#f4f9f1">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <ul className="text-tmc-green font-display text-2xl leading-loose">
                    <li><button onClick={toggleNav}><Link to="/" className="no-underline">Home</Link></button></li>
                    <li><button onClick={toggleNav}><Link to="/about" className="no-underline">About</Link></button></li>
                    <li><button onClick={toggleNav}><Link to="/news" className="no-underline">News & Information</Link></button></li>
                    <li><button onClick={toggleNav}><Link to="/fees" className="no-underline">Fees</Link></button></li>
                    <li><button onClick={toggleNav}><Link to="/contact" className="no-underline">Contact</Link></button></li>
                    <li><button onClick={toggleNav} className="border border-tcm-green mt-4 rounded-md px-2 py-1"><Link to="/bookings" className="no-underline">Bookings & Enrolments</Link></button></li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNavigation