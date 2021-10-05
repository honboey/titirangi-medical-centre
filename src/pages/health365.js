import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

function health365() {
  return (
    <Layout title="Health365">
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
        <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
          <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
            <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Health365</h2>            
          </div>
          <div className="lg:w-1/2 lg:pl-1/24">
            <p className="mb-4">Health365 is a secure online system allowing patients to book doctor appointments, access your own lab results, immunisation records or order repeat prescriptions online.</p>

            <p className="mb-4">Once enrolled in health365, you can access your records with a secure password. It provides 24 hour access, 7 days a week. This service is available for $10 a year.</p>

            <p className="mb-4">If you are interested, please download <a href="">this form</a> and return to reception and they will go through the process of setting it up. You will need proof of identification and an email address to set it up. Once set up, you will receive a username and password via email.</p>

            <a href="/"><StaticImage src="../images/health365.jpg" alt="Thumbnail of Health365 enrolment form" className="float-left mr-8 w-1/3" /></a>
            <p className="mb-4">Please click <a href="https://health365.co.nz/SGAccount/LogOn">on the logo</a> to access the portal </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default health365

