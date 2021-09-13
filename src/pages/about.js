import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import HtmlSerializer from "../utilities/HtmlSerializer"
import Layout from "../components/Layout"
import Article from "../components/Article"
import Doctors from "../components/Doctors"

function AboutPage({ data }) {
  const doc = data.prismicAbout.data

  return (
    <Layout title=" | About">
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">

        <Article heading={doc.page_title.raw[0].text} body={doc.page_introduction.raw} />        
        <Doctors />            
        <section className="border-l border-black px-1/24 py-8 mb-24">
          <h3 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Our nursing and support staff</h3>
          <div className="lg:flex lg:justify-end">
            <figure className="lg:w-3/4 mb-8">
              <GatsbyImage image={doc.staff_image.gatsbyImageData} alt={doc.staff_image.alt} />
              <figcaption className="text-xs">Photo by James Green</figcaption>
            </figure>
          </div>
          <div className="lg:w-1/2">
            <RichText htmlSerializer={HtmlSerializer} render={doc.staff.raw} />
          </div>
        </section>

        <section className="lg:w-11/12 lg:mx-auto lg:flex lg:items-center mb-8">
          <figure className="mb-4 w-full lg:w-14/22 lg:border-r lg:border-black lg:pr-1/22 lg:pt-4">
            <GatsbyImage image={doc.services_image.gatsbyImageData} alt={doc.services_image.alt} />
            <figcaption className="text-xs">Photo by <a href="https://unsplash.com/@utsmanmedia">Utsman Media</a></figcaption>
          </figure>
          <div className="flex justify-end lg:w-8/22 lg:pl-1/22">
            <div className="w-8/12 lg:w-full pl-1/24 lg:pl-0 py-6 mb-8 border-l border-black lg:border-0">
              <RichText htmlSerializer={HtmlSerializer} render={doc.services.raw} />
            </div>
          </div>
        </section>     

        <Article heading="Our History" body={doc.history.raw} />                
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    prismicAbout {
      data {
        page_title {
            raw
          }
        page_introduction {
            raw
        }        
        services_image {
            gatsbyImageData
          } 
        services {
            raw
          }
        history {
          raw
        }
        staff_image {
            gatsbyImageData
          }
        staff {
          raw
        }
      }
    }
  }
`