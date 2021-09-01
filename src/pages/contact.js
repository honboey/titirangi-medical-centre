import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

function ContactPage() {
    return (
        <Layout title=" | Contact">
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal">Contact</h2>
                    </div>
                <div className="lg:w-1/2 lg:pl-1/24">
                        <h3 className="uppercase leading-snug text-gray-500">Street Address</h3>
                        <p className="font-display text-2xl md:text-3xl mb-4">2 Rangiwai Rd<br />
                            Titrangi<br />
                            Waitakere 0604</p>
                        <StaticImage src="../images/map.png" alt="Google map" className="mb-8"/>
                        <h3 className="uppercase leading-snug text-gray-500">Postal Address</h3>
                        <p className="font-display text-2xl md:text-3xl mb-8">2 Rangiwai Rd<br />
                            Titrangi<br />
                            Waitakere 0604</p>
                        <h3 className="uppercase leading-snug text-gray-500">Phone</h3>
                        <p className="font-display text-2xl md:text-3xl mb-8">(09) 817 8069</p>
                        <h3 className="uppercase leading-snug text-gray-500">Fax</h3>
                        <p className="font-display text-2xl md:text-3xl mb-8">(09) 817 8069</p>
                    </div>
                </section>
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal">Clinic Hours</h2>
                    </div>
                    <div className="lg:w-1/2 lg:pl-1/24">
                        <h3 className="uppercase leading-snug text-gray-500">Monday – Friday</h3>
                        <p className="font-display text-2xl md:text-3xl mb-4">8:00am – 5:00pm</p>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default ContactPage