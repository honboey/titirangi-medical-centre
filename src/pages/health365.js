import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import health365Form from "../forms/health365.pdf"
import enrolmentFormGuide from "../forms/enrolment-guide.pdf"
import enrolmentForm from "../forms/enrolment.pdf"

function health365() {
  return (
    <Layout title="Health365">
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
        <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
          <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
            <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Health365</h2>
          </div>
          <div className="lg:w-1/2 lg:pl-1/24">
            <a href="https://health365.co.nz/SGAccount/LogOn"><StaticImage src="../images/health365.jpg" alt="Health365 logo" className="w-1/3 float-left mr-8" /></a>
            <p className="mb-4">Health365 is a secure online system allowing patients to book doctor appointments, access your own lab results, immunisation records or order repeat prescriptions online.</p>
            <p className="mb-4">Once enrolled in health365, you can access your records with a secure password.It provides 24 hour access, 7 days a week. This service is available for $10 a year.</p>
            <p className="mb-4">If you are interested, please download <a href={health365Form}>this form</a> and return to reception and they will go through the process of setting it up. You will need proof of identification and an email address to set it up. Once set up, you will receive a username and password via email.</p>
            <p className="mb-4">Currently we are unable to book appointments through Health365 due to the current alert levels - please call <a href="tel:tel:+64098178069">09 817 8069</a> to book your appointment</p>
            <p className="mb-4">Our books are currently open and we are taking new enrolments.</p>
            <p className="mb-4">Please <a href={enrolmentForm}>download this form</a>.Once the form is completed, please email it to <a href="mailto:admin@titirangimc.co.nz">admin@titirangimc.co.nz</a> or bring it to the clinic in person.</p>
            <p className="mb-4">Please <a href={enrolmentFormGuide}>click here</a> to view the <i>Enrolment Form Guide for Paitents</i></p>
          </div>
        </section>
      </div >
    </Layout >
  )
}

export default health365

