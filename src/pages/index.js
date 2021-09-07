import * as React from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import News from "../components/News"
import { RichText } from 'prismic-reactjs'
import htmlSerializer from "../utilities/htmlSerializer"
import CustomLink from "../utilities/CustomLink"

function IndexPage({ data }) {
const doc = data.prismicHomepage.data
console.log(doc)

  return (
    <Layout title="">
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">

        <section className="border-r border-l border-black pl-1/24 pr-1/24 mb-8">
          <div className="py-8 lg:flex">
            <p className="font-display text-4xl md:text-6xl leading-snug md:leading-normal lg:w-8/12 lg:border-r lg:border-black lg:pr-1/24 mb-8">{doc.headline.text}</p>
            <div className="lg:w-4/12 lg:px-1/24 lg:pt-8">
              <RichText htmlSerializer={htmlSerializer} serializeHyperlink={CustomLink} render={doc.lede.raw} />              
            </div>
          </div>
        </section>

        <section className="mb-8">
          <figure className="mb-4 w-full lg:w-21/24">
            <GatsbyImage image={doc.clinic_image.gatsbyImageData} alt={doc.clinic_image.alt} />
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
          <GatsbyImage image={doc.new_patients_image.gatsbyImageData} alt={doc.new_patients_image.alt} />
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
          <GatsbyImage image={doc.information_image.gatsbyImageData} alt={doc.information_image.alt} />
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

      <News />

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    prismicHomepage {
      data {
        headline {
          text
        }
        lede {
          raw
        }
        clinic_image {
          alt
          gatsbyImageData
        }
        our_clinic {
          raw
        }
        new_patients_image {
          alt
          gatsbyImageData
        }
        new_patients {
          raw
        }
        information_image {
          alt
          gatsbyImageData
        }
        information {
          raw
        }
      }
    }
  }
`

