import * as React from "react"
import { Link } from "gatsby"

function DesktopNavigation() {
    return (
        <ul className="hidden w-8/12 lg:flex lg:justify-between items-center text-base">
            <li><Link to="/bookings" className="no-underline"><button className="border border-black rounded-md px-2 py-1">Bookings & Enrolments</button></Link></li>
            <li><Link to="/about" className="no-underline">About</Link></li>
            <li><Link to="/news" className="no-underline">News & Information</Link></li>
            <li><Link to="/fees" className="no-underline">Fees</Link></li>
            <li><Link to="/contact" className="no-underline">Contact</Link></li>
        </ul>
    )
}

export default DesktopNavigation