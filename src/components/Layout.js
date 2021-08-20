import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import DesktopNavigation from "../components/DesktopNavigation"
import MobileNavigation from "../components/MobileNavigation"

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
    return (
        <>
            <Helmet>
                <title>{data.site.siteMetadata.title}{title}</title>
                <meta name="Keywords" content="Titirangi, Medical, Centre, health, Waitakere, doctor, gp, nurse, Auckland, medicine," />
                <meta name="Description" content="For over seventy years, the Titirangi Medical Centre has supported our local community – keeping us healthy, safe and strong." />
            </Helmet>
            <div className="wrapper max-w-screen-xl mx-auto">
                <header className="mb-20">
                    <nav className="flex items-center justify-between">
                        <div className="flex w-3/4 lg:w-4/12 items-center">
                            <Link to="/" className="w-1/6 mr-4"><StaticImage src="../images/logo.jpg" alt=""/></Link>
                            <Link to="/" className="no-underline"><h1 className="font-display md:text-xl">Titirangi Medical Centre</h1></Link>
                        </div>
                        <DesktopNavigation />
                        <MobileNavigation />
                    </nav>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <h1><StaticImage src="../images/logo.jpg" alt=""/></h1>
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
            </div>
        </>
    )
}

export default Layout