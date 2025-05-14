import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import health365Form from "../forms/health365.pdf"

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
            <p className="mb-4"><a href="https://health365.co.nz/SGAccount/LogOn">Health365</a> is a secure online system allowing patients to book doctor appointments, access your own lab results, immunisation records or order repeat prescriptions online.</p>
            <p className="mb-4">Once enrolled in health365, you can access your records with a secure password.It provides 24 hour access, 7 days a week. This service is available for $10 a year.</p>
            <p className="mb-4">If you are interested, please download <a href={health365Form}>this form</a> and return to reception and they will go through the process of setting it up. You will need proof of identification and an email address to set it up. Once set up, you will receive a username and password via email.</p>
            <p className="mb-4">To protect the health and wellbeing of our patients and staff, we request patients who have an infectious illness (respiratory, gastroenteritis, contagious viral infections such as chicken pox, etc) to call our receptionist team on 817 8069 to make an appointment held in our dedicated external space that has the capacity to contain potential infectious illnesses. For additional protection, please wear a face mask in this clinical setting.</p>
            <p className="mb-4">Please note if a patient books an appointment online who presents with a respiratory and/or gastroenteritis or any other infectious illness they will need to reschedule and pay for the original appointment.</p>
            <p className="mb-4">To make an online booking please click on the available slot. Our 15-minute appointment allows our doctors to attend to one main health concern. If you would like a consultation for additional health issues, please make a double appointment.</p>
            <p className="mb-4">Adult first appointments will require an extended appointment – one with our Registered Nurse and following a double appointment with the Doctor.</p>
            <p className="mb-4">For Drivers License Assessments please contact our receptionists to arrange an appointment with one of our Nurse Prescribers.</p>
            <p className="mb-4">To provide a patient centred and responsive service, we require patients to provide two hours’ notice if they are not able to attend their booked appointments, otherwise a Did Not Attend (DNA) fee applies.</p>
          </div>
        </section>
      </div >
    </Layout >
  )
}

export default health365

