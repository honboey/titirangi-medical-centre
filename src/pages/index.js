import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

function IndexPage({ data }) {
  return (
    <Layout title="">
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">

        <section className="border-r border-l border-black pl-1/24 pr-1/24 mb-8">
          <div className="py-8 lg:flex">
            <p className="font-display text-4xl md:text-6xl leading-snug md:leading-normal lg:w-8/12 lg:border-r lg:border-black lg:pr-1/24 mb-8">For over seventy years, Titirangi Medical Centre  has been committed to taking care of generations of west auckland families.</p>
            <div className="lg:w-4/12 lg:px-1/24 lg:pt-8">
              <p className="mb-4">Titirangi Medical Centre is a family friendly medical centre consisting of 5 fully trained GPs, nursing and admin staff. We aim to offer the highest quality healthcare for the whole family.</p>
              <p><Link to="/about">Learn more about us</Link></p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <figure className="mb-4 w-full lg:w-21/24">
            <StaticImage src="../images/clinic.jpg" alt="External shot of the Titirangi clinic, overlooking the Waitekere ranges" />
            <figcaption className="text-xs">Photo by Phil Botha</figcaption>
          </figure>
          <div className="flex justify-end">
            <div className="w-8/12 lg:w-1/2 pl-1/24 lg:px-1/24 py-6 mb-8 border-l border-black">
              <h3 className="font-display text-2xl md:text-3xl mb-4">Our Clinic</h3>
              <p>Nestled within vibrant Titirangi, our clinic overlooks the beautiful Waitakere Ranges. Many of us are local and are part of the Titirangil community. Come visit us at <a href="https://goo.gl/maps/FWErtgeuLaofNBgs5">2 Newland Rd, Titirangi</a>.</p>
            </div>
          </div>
        </section>

        <section className="lg:w-11/12 lg:mx-auto lg:flex lg:items-center mb-8">
          <figure className="mb-4 w-full lg:w-14/22 lg:order-2 lg:border-l lg:border-black lg:pl-1/22 lg:pt-4">
            <StaticImage className="" src="../images/silver-fern.jpg" alt="Silver fern" />
            <figcaption className="text-xs">Photo by <a href="https://unsplash.com/@picsbyjameslee">James Lee</a></figcaption>
          </figure>
          <div className="flex justify-end lg:w-8/22 lg:pr-1/22 lg:order-1">
            <div className="w-8/12 lg:w-full pl-1/24 lg:pl-0 py-6 mb-8 border-l border-black lg:border-0">
              <h3 className="font-display text-2xl md:text-3xl mb-4">New Patients</h3>
              <p>Our books are currently open and we welcome to enrolments. To enrol please <Link to="/bookings">visit our Enrolments page</Link> to find out the fastest and easiest way to do so.</p>
            </div>
          </div>
        </section>
        <section className="lg:w-11/12 lg:mx-auto lg:flex lg:items-center mb-8">
          <figure className="mb-4 w-full lg:w-14/22 lg:border-r lg:border-black lg:pr-1/22 lg:pt-4">
            <StaticImage className="" src="../images/waitakere-beach.jpg" alt="Waitakere beach" />
            <figcaption className="text-xs">Photo by <a href="https://unsplash.com/@picsbyjameslee">James Lee</a></figcaption>
          </figure>
          <div className="flex justify-end lg:w-8/22 lg:pl-1/22">
            <div className="w-8/12 lg:w-full pl-1/24 lg:pl-0 py-6 mb-8 border-l border-black lg:border-0">
              <h3 className="font-display text-2xl md:text-3xl mb-4">Information</h3>
              <p>Have a question about the practice? Visit our <Link to="/news">News and Information page</Link> to see if we’ve already answered it. Otherwise feel free to give us a call on <a href="tel:">0405 266 261</a> so one of our staff can help you out.</p>
            </div>
          </div>
        </section>
      </div>
      
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal px-1/24">Latest News</h2>
      </div>
      <section className="bg-black text-white mb-8">
        <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
          <div className="lg:flex flex-wrap">
            <article className="lg:w-1/2 px-1/24 py-8 border-b border-white">
              <h3 className="font-display text-2xl md:text-3xl">Alert level 4</h3>
              <time className="uppercase block mb-4 text-gray-400">1 Sep, 2021</time>
              <p className="mb-4">We are still open and conducting mainly phone or video consults. Due to the current alert level, our doors remained locked. If necessary, we can see patients in person. All patients with respiratory symptoms will be seen in our portacom or carpark. Masks needs to be worn. Please call to discuss with our staff the best way to support you. </p>
            </article>
            <article className="lg:w-1/2 px-1/24  py-8 border-b border-white">
              <h3 className="font-display text-2xl md:text-3xl">Covid 19 testing</h3>
              <time className="uppercase block mb-4 text-gray-400">1 Sep, 2021</time>
              <p className="mb-4">We are offering free covid 19 tests to all our enrolled patients. This is by appointment only, please call us.  Please go to our news page for more information</p>
            </article>
            <article className="lg:w-1/2 px-1/24  py-8 border-b border-white">
              <h3 className="font-display text-2xl md:text-3xl">Covid vaccines</h3>
              <time className="uppercase block mb-4 text-gray-400">1 Sep, 2021</time>
              <p className="mb-4">At this stage, we are not offering covid 19 vaccines. We are working hard to get this up and running so watch this space!</p>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allImageSharp {
      nodes {
        gatsbyImageData
        id
      }
    }
  }
`