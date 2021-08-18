import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"

function IndexPage() {
  return (
    <Layout>
      <section>
        <p>For over seventy years, the Titirangi Medical Centre has supported our local community – keeping us healthy, safe and strong.</p>
        <p>The Titirangi Medical Centre is a team of five GPs, nursing stafff and admin support. We are members of the community and upid qui te sim doluptia volor simagni musdam serchilic tendae. Nem experero cusandicia illupta tquassi aut laboribus.</p>
        <p><Link to="/about">Learn more about us</Link></p>
      </section>
      <section>
        <StaticImage src="../images/clinic.png" />
        <h3>Our clinic</h3>
        <p>We are housed in a beautiful fibro house overlooking the Waitakere Ranges. When you visit us, it’s like you’re visiting a family home not a cold, clinical centre. Please visit us at <a href="https://goo.gl/maps/b1cxbq87KPzqd18k6">2 Newland Rd, Titirangi</a>.</p>
      </section>
      <section>
        <StaticImage src="../images/silver-fern.jpg" />
        <h3>New patients</h3>
        <p>Our books are currently open and we welcome to enrolments. To enrol please visit the <Link to="/bookings">Enrol page</Link> to find out the fastest and easiest way to do so.</p>
      </section>
      <section>
        <StaticImage src="../images/waitakere-beach.jpg" />
        <h3>News & information</h3>
        <p>Have a question about the practice? Visit <Link to="/news">the FAQs</Link> to see if we’ve already answered it. Otherwise feel free to give us a call on <a href="tel:">0405 266 261</a> so one of our staff can help you out</p>
      </section>
      <section>
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
