import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PageTransition from "gatsby-plugin-page-transitions"
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
                <html lang="en" />
                <title>{data.site.siteMetadata.title}{title}</title>
                <meta name="Keywords" content="Titirangi, Medical, Centre, health, Waitakere, doctor, gp, nurse, Auckland, medicine," />
                <meta name="Description" content="For over seventy years, the Titirangi Medical Centre has supported our local community – keeping us healthy, safe and strong." />
            </Helmet>
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <header className="mb-20">
                    <nav className="flex items-center justify-between">
                        <div className="flex w-3/4 lg:w-4/12 items-center">
                            <Link to="/" className="w-1/6 mr-4"><span className="sr-only">Home</span><StaticImage src="../images/logo.jpg" alt="" /></Link>
                            <Link to="/" className="no-underline"><h1 className="font-display md:text-xl">Titirangi Medical Centre</h1></Link>
                        </div>
                        <DesktopNavigation />
                        <MobileNavigation />
                    </nav>
                </header>
            </div>
            <main>
                <PageTransition>
                    {children}
                </PageTransition>
            </main>
            <footer>
                <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8 lg:flex lg:justify-between border-t border-black">
                    <h1 className="w-5/24 lg:pr-1/24 mb-4"><Link to="/"><span className="sr-only">Titirangi Medical Centre</span><StaticImage src="../images/logo.jpg" alt="Titirangi Medical Centre logo" /></Link></h1>
                    <p className="lg:px-1/24">Mon – Fri<br />
                        8am – 5pm</p>
                    <div className="lg:px-1/24">
                        <a href="https://goo.gl/maps/FWErtgeuLaofNBgs5">
                            <p className="mb-4">2 Rangiwai Rd<br />
                                Titirangi<br />
                                Waitakere 0604</p>
                        </a>
                        <p className="mb-4">PO Box 60107<br />
                            Titirangi<br />
                            Waitakere 0642</p>
                    </div>
                    <div className="lg:px-1/24">
                        <p>Email – <a href="mailto:office@titirangimc.co.nz">office@titirangimc.co.nz</a></p>
                        <p>Phone – <a href="tel:+64098178069">(09) 817 8069</a></p>
                        <p>Fax – (09) 817 8067</p>
                        <p className="mb-4">Healthlink EDI – titimedi</p>
                        <p className="text-xs">Website designed and built by <a href="https://dialogicstudios.com.au/">Dialogic Studios</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout