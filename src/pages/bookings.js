import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

function BookingsPage() {
    return (
        <Layout title=" | Bookings & Enrolments">
            <section>
                <h2>Bookings</h2>
                <p>(Existing / enrolled patients)</p>
                <h3>Option 1</h3>
                <p>Call <a href="tel:">0475 9837 8302</a></p>
                <p>The easiest way to make a booking is to call us to arrange a time</p>
                <h3>Option 2</h3>
                <p><a href="https://health365.co.nz/SGAccount/LogOn">Health365</a></p>
                <p>If you have an Helath365 account you can make an appointment through the Health365 portal.</p>
            </section>
            <section>
                <h2>Enrolments</h2>
                <p>(New patients)</p>
                <h3>New patients</h3>
                <a href=""><StaticImage src="../images/form.jpg" /></a>
                <p>Our books are currently open and we are taking new enrolments.</p>
                <p>Please download this form. Once the form is completed, please email it to <a href="mailto:admin@titirangimc.co.nz">admin@titirangimc.co.nz</a> or bring it to the clinic in person.</p>
            </section>
        </Layout>
    )
}

export default BookingsPage