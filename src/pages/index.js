import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function IndexPage() {
  return (
    <>
      <header>
        <nav>
          <h1><StaticImage src="../images/logo.gif" />Titirangi Medical Centre</h1>
          <ul>
            <li>Bookings & Enrolments</li>
            <li>About</li>
            <li>Fees</li>
            <li>News & Information</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <p>For over seventy years, the Titirangi Medical Centre has supported our local community – keeping us healthy, safe and strong.</p>
          <p>The Titirangi Medical Centre is a team of five GPs, nursing stafff and admin support. We are members of the community and upid qui te sim doluptia volor simagni musdam serchilic tendae. Nem experero cusandicia illupta tquassi aut laboribus.</p>
          <p><a href="">Learn more about us</a></p>
        </section>
        <section>
          <StaticImage src="../images/clinic.png" />
          <h3>Our clinic</h3>
          <p>We are housed in a beautiful fibro house overlooking the Waitakere Ranges. When you visit us, it’s like you’re visiting a family home not a cold, clinical centre. Please visit us at <a href="https://goo.gl/maps/b1cxbq87KPzqd18k6">2 Newland Rd, Titirangi</a>.</p>
        </section>
        <section>
          <StaticImage src="../images/silver-fern.jpg" />
          <h3>New patients</h3>
          <p>Our books are currently open and we welcome to enrolments. To enrol please visit the <a href="">Enrol page</a> to find out the fastest and easiest way to do so.</p>
        </section>
        <section>
          <StaticImage src="../images/waitakere-beach.jpg" />
          <h3>FAQs</h3>
          <p>Have a question about the practice? Visit <a href="">the FAQs</a> to see if we’ve already answered it. Otherwise feel free to give us a call on <a href="tel:">0405 266 261</a> so one of our staff can help you out</p>
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
      </main>
      <footer>
        <h1><StaticImage src="../images/logo.gif" /></h1>
        <p>Mon – Fri<br/>
        8am – 5pm</p>
        <p>2 Rangiwai Rd<br/>
        Titirangi<br/>
        Waitakere 0604</p>
        <p>PO Box 60107<br/>
        Titirangi<br/>
        Waitakere 0642</p>
        <p>Phone – (09) 817 8069</p>
        <p>Fax – (09) 817 8067</p>
      </footer>
    </>
  )
}

export default IndexPage
