import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

function Layout({ children, title }) {
    // Data query to retrieve site title
    const data = useStaticQuery(graphql`
        query MyQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }      
    `)
        console.log(title)
    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}{title}</title>
                <meta name="Keywords" content="Titirangi, Medical, Centre, health, Waitakere, doctor, gp, nurse, Auckland, medicine," />
                <meta name="Description" content="For over seventy years, the Titirangi Medical Centre has supported our local community – keeping us healthy, safe and strong." />
            </Helmet>
            <header>
                <nav>
                    <h1><Link to="/"><StaticImage src="../images/logo.jpg" />Titirangi Medical Centre</Link></h1>
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
                <h1><StaticImage src="../images/logo.jpg" /></h1>
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