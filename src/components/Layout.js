import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <h1><Link to="/"><StaticImage src="../images/logo.gif" />Titirangi Medical Centre</Link></h1>
                    <ul>
                        <li><Link to="/bookings">Bookings & Enrolments</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/fees">Fees</Link></li>
                        <li><Link to="/news">News & Information</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1><StaticImage src="../images/logo.gif" /></h1>
                <p>Mon – Fri<br />
                    8am – 5pm</p>
                <p>2 Rangiwai Rd<br />
                    Titirangi<br />
                    Waitakere 0604</p>
                <p>PO Box 60107<br />
                    Titirangi<br />
                    Waitakere 0642</p>
                <p>Phone – (09) 817 8069</p>
                <p>Fax – (09) 817 8067</p>
            </footer>
        </>
    )
}

export default Layout