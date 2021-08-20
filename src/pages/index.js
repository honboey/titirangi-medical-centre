import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import ImageAndTextComponent from "../components/ImageAndTextComponent"

function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout title="">
      <section className="border-r border-l border-black pl-1/24 pr-1/24 mb-8">
        <div className="py-8 lg:flex">
          <p className="font-display text-4xl md:text-6xl leading-snug md:leading-normal lg:w-8/12 lg:border-r lg:border-black lg:pr-1/24 mb-8">For over seventy years, the Titirangi Medical Centre has supported our local community – keeping us healthy, safe and strong.</p>
          <div className="lg:w-4/12 lg:px-1/24 lg:pt-8">
            <p className="mb-4">The Titirangi Medical Centre is a team of five GPs, nursing stafff and admin support. We are members of the community and upid qui te sim doluptia volor simagni musdam serchilic tendae. Nem experero cusandicia illupta tquassi aut laboribus.</p>
            <p><Link to="/about">Learn more about us</Link></p>
          </div>
        </div>
      </section>
      <ImageAndTextComponent 
        image={data.allImageSharp.nodes[4].gatsbyImageData} 
        alt="Silver fern" 
        figCaption="Photo by Phil Botha"
        header="New patients"
        body="Our books are currently open and we welcome to enrolments. To enrol please visit the Enrol page to find out the fastest and easiest way to do so."/>
      <section>
        <figure>
          <StaticImage className="w-full lg:w-21/24" src="../images/waitakere-beach.jpg" alt="A beach in Waitakere" />
          <figcaption>Photo by <a href="https://unsplash.com/@picsbyjameslee">James Lee</a></figcaption>
        </figure>
        <div class="w-8/12 pl-4 py-6 mb-8 border-l border-black float-right">
          <h3 className="font-display text-2xl">News & information</h3>
          <p>Have a question about the practice? Visit <Link to="/news">the FAQs</Link> to see if we’ve already answered it. Otherwise feel free to give us a call on <a href="tel:">0405 266 261</a> so one of our staff can help you out</p>
        </div>
      </section>
      <section className="clear-right">
        <h2>Latest News</h2>
        <article>
          <h3>Masks</h3>
          <time>18 Aug, 2020</time>
          <p>We are still asking our patients to bring their own mask and wear it in the waiting room.</p>
          <p>We cannot continue to give away masks so will be charging $1 for those who do NOT bring and wear their own.</p>
        </article>
        <article>
          <h3>Covid Vaccines</h3>
          <time>18 Aug, 2020</time>
          <p>Please if you get contacted by Text or Email re making a Covid vaccine appointment DO NOT ring us. We are NOT giving any Covid vaccines. Please use the link provided in the text or email or phone the Vaccination Help line on 0800282926.</p>
        </article>
        <article>
          <h3>Flu Vaccinies</h3>
          <time>18 Aug, 2020</time>
          <p>We are still asking our patients to bring their own mask and wear it in the waiting room.</p>
          <p>We cannot continue to give away masks so will be charging $1 for those who do NOT bring and wear their own.</p>
        </article>
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