import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import enrolmentForm from "../forms/enrolment.pdf"

function BookingsPage() {
    return (
        <Layout title=" | Bookings & Enrolments">
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal">Bookings</h2>
                        <p className="font-display text-2xl md:text-3xl mb-4">(Existing / enrolled patients)</p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-1/24">
                        <div className="pb-8 border-b border-black">
                            <h3 className="uppercase leading-snug text-gray-500">Option 1</h3>
                            <p className="font-display text-2xl md:text-3xl mb-4">Call <a href="tel:tel:+64098178069">(09) 817 8069</a></p>
                            <p>The easiest way to make a booking is to call us to arrange a time</p>
                        </div>
                        <div className="pt-8">
                            <h3 className="uppercase leading-snug text-gray-500">Option 2</h3>
                            <p className="font-display text-2xl md:text-3xl mb-4"><a href="https://health365.co.nz/SGAccount/LogOn">Health365</a></p>
                            <p>If you have an Helath365 account you can make an appointment through the Health365 portal.</p>
                        </div>
                    </div>
                </section>
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal">Enrolments</h2>
                    </div>
                    <div className="lg:w-1/2 lg:pl-1/24">
                        <h3 className="font-display text-2xl md:text-3xl mb-4">New Patients</h3>
                        <a href={enrolmentForm}><StaticImage src="../images/form.jpg" alt="Thumbnail of enrolment form" className="w-1/3 float-left mr-8"/></a>
                        <p className="mb-4">Our books are currently open and we are taking new enrolments.</p>
                        <p>Please <a href={enrolmentForm}>download this form</a>. Once the form is completed, please email it to <a href="mailto:admin@titirangimc.co.nz">admin@titirangimc.co.nz</a> or bring it to the clinic in person.</p>
                    </div>
                </section>                
            </div>

        </Layout>
    )
}

export default BookingsPage