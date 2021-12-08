import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import enrolmentForm from "../forms/enrolment.pdf"
import enrolmentFormGuide from "../forms/enrolment-guide.pdf"
import health365Form from "../forms/health365.pdf"

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
                            <p>Call us to book an appointment.</p>
                        </div>
                        <div className="pt-8">
                            <h3 className="uppercase leading-snug text-gray-400">Option 2</h3>
                            <p className="font-display text-2xl md:text-3xl mb-4 text-gray-400">Health365</p>
                            <p className="text-gray-400">Due to the current alert levels in Auckland and the need to triage appointments, we are unable to book appointments via Health365.</p>
                        </div>
                    </div>
                </section>
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal">Enrolments</h2>
                    </div>
                    <div className="lg:w-1/2 lg:pl-1/24">
                        <h3 className="font-display text-2xl md:text-3xl mb-4">New Patients</h3>
                        <a href={enrolmentForm}><StaticImage src="../images/form.jpg" alt="Thumbnail of enrolment form" className="w-1/3 float-left mr-8" /></a>
                        <p className="mb-4">Our books are currently open and we are taking new enrolments.</p>
                        <p className="mb-4">Please <a href={enrolmentForm}>download this enrolment package</a> and complete the forms in it. Once the forms are completed, please email it to <a href="mailto:office@titirangimc.co.nz">office@titirangimc.co.nz</a> or bring it to the clinic in person.</p>
                        <p className="mb-4">Bring your birth certificate or proof of residency to your first appointment to complete registration.</p>
                        <h4 className="uppercase">Enrolment checklist</h4>
                        <p className="">Please bring the following to your first appointment:</p>
                        <ul className="mb-4">
                            <li>&#9745; Completed <a href={enrolmentForm}>enrolment package</a> (ProCare enrolment, Registration checklist, Consent form for request of notes, Health365 enrolment (optional), Privacy declaration)</li>
                            <li>&#9745; Passport / birth certificate / proof of residency</li>
                        </ul>
                        <p className="mb-4">Please <a href={enrolmentFormGuide}>click here</a> to view the <i>Enrolment Form Guide for Paitents</i></p>
                        <p className="mb-4">Your first appointment with the doctor will need to be a double appointment for the doctor to go through all your medical history. For your initial appointment, we expect pre-payment before you see the doctor.</p>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default BookingsPage