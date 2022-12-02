import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import enrolmentForm from "../forms/enrolment.pdf"
import enrolmentFormGuide from "../forms/enrolment-guide.pdf"

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
                        <p className="mb-4">We will be opening our books in January 2023.</p>
                        <p className="mb-4">Please download this <a href={ enrolmentForm }>enrolment package (PDF)</a>.  Complete these forms and together with a copy of either your birth certificate/passport or proof of residency (work or resident visa) – email to <a href="mailto:office@titirangimc.co.nz">office@titirangimc.co.nz</a>. Alternatively, you can bring these forms along with your birth certificate/passport or proof of residency to the clinic in person.</p>
                        <p class="mb-4">This enrolment process needs to be completed at least 1 week prior to your first appointment.</p>
                        <h3 class="font-bold mb-4">Enrolment checklist</h3>
                        <p className="mb-4">Please make sure you have completed and signed:</p>
                        <ul className="mb-4">
                            <li>☑ Completed <a href={ enrolmentForm }>enrolment package (PDF)</a></li>
                            <li>☑ ProCare enrolment</li>
                            <li>☑ Registration checklist</li>
                            <li>☑ Consent form for request of notes</li>
                            <li>☑ Health365 enrolment (optional)</li>
                            <li>☑ Privacy declaration (optional)</li>
                            <li>☑ Copy of Passport / birth certificate / proof of residency (or bring in person to clinic before first appointment)</li>
                        </ul>
                        <p class="mb-4">Please click here to view the <a href={ enrolmentFormGuide }>Enrolment Form Guide for Patients (PDF)</a></p>
                        <p class="mb-4">Your first appointment with the doctor will need to be a double appointment for the doctor to go through all your medical history. For your initial appointment, we require pre-payment before you see the doctor.</p>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default BookingsPage