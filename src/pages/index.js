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
            <p className="font-display text-4xl md:text-6xl leading-snug md:leading-normal lg:w-8/12 lg:border-r lg:border-black lg:pr-1/24 mb-8">For over seventy years, the Titirangi Medical Centre has supported our local community – keeping us healthy, safe and strong.</p>
            <div className="lg:w-4/12 lg:px-1/24 lg:pt-8">
              <p className="mb-4">The Titirangi Medical Centre is a team of five GPs, nursing stafff and admin support. We are members of the community and upid qui te sim doluptia volor simagni musdam serchilic tendae. Nem experero cusandicia illupta tquassi aut laboribus.</p>
              <p><Link to="/about">Learn more about us</Link></p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
            <figure className="mb-4 w-full lg:w-21/24">
                <StaticImage src="../images/clinic.jpg" alt="External shot of the Titirangi clinic, overlooking the Waitekere ranges"/>
                <figcaption className="text-xs">Photo by Phil Botha</figcaption>
            </figure>
            <div className="flex justify-end">
                <div className="w-8/12 lg:w-1/2 pl-1/24 lg:px-1/24 py-6 mb-8 border-l border-black">
                    <h3 className="font-display text-2xl md:text-3xl mb-4">Our Clinic</h3>
                    <p>We are housed in a beautiful fibro house overlooking the Waitakere Ranges. When you visit us, it’s like you’re visiting a family home not a cold, clinical centre. Please visit us at <a href="https://goo.gl/maps/FWErtgeuLaofNBgs5">2 Newland Rd, Titirangi</a>.</p>
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
              <p>Our books are currently open and we welcome to enrolments. To enrol please visit the Enrol page to find out the fastest and easiest way to do so.</p>
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

      <section className="bg-black text-white mb-8">
        <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
            <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-8 px-1/24">Latest News</h2>
            <div className="lg:flex flex-wrap">
              <article className="lg:w-1/2 px-1/24 py-8 border-b border-white">
                <h3 className="font-display text-2xl md:text-3xl">Masks</h3>
                <time className="uppercase block mb-4">18 Aug, 2020</time>
                <p className="mb-4">We are still asking our patients to bring their own mask and wear it in the waiting room.</p>
                <p className="mb-4">We cannot continue to give away masks so will be charging $1 for those who do NOT bring and wear their own.</p>
              </article>
              <article className="lg:w-1/2 px-1/24  py-8 border-b border-white">
                <h3 className="font-display text-2xl md:text-3xl">Covid Vaccines</h3>
                <time className="uppercase block mb-4">18 Aug, 2020</time>
                <p className="mb-4">Please if you get contacted by Text or Email re making a Covid vaccine appointment DO NOT ring us. We are NOT giving any Covid vaccines. Please use the link provided in the text or email or phone the Vaccination Help line on 0800282926.</p>
              </article>
              <article className="lg:w-1/2 px-1/24  py-8 border-b border-white">
                <h3 className="font-display text-2xl md:text-3xl">Flu Vaccinies</h3>
                <time className="uppercase block mb-4">18 Aug, 2020</time>
                <p className="mb-4">We are still asking our patients to bring their own mask and wear it in the waiting room.</p>
                <p className="mb-4">We cannot continue to give away masks so will be charging $1 for those who do NOT bring and wear their own.</p>
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