import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

function ContactPage() {
    return (
        <Layout title=" | Contact">
            <section>
                <h2>Contact</h2>
                <h3>Street address</h3>
                <a href="https://goo.gl/maps/b1cxbq87KPzqd18k6">
                    <p>2 Rangiwai Rd<br/>
                    Titrangi<br/>
                    Waitakere 0604</p>
                </a>
                <StaticImage src="../images/map.png" />
                <h3>Phone</h3>
                <a href="tel:"><p>(09) 817 8069</p></a>
                <h3>Postal address</h3>
                <p>PO Box 60107<br/>
                Titirangi<br/>
                Waitakere 0642</p>
            </section>
            <section>
                <h2>Clinic hours</h2>
                <h3>Mon – Fri</h3>
                <p>8am – 5pm</p>
            </section>
        </Layout>
    )
}

export default ContactPage