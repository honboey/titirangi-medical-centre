import * as React from "react"
import Layout from "../components/Layout"

function NewsPage() {
    return (
        <Layout title=" | News & Information">
            <section>
                <h2>News & updates</h2>
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
            <section>
                <h2>Clinic information</h2>
                <ul>
                    <li>
                        <h3>Do you offer the Covid-19 vaccine?</h3>
                        <p>We know the patient fee system can be very confusing and so we hope this might make it easier to understand and answer any questions you may have.</p>
                    </li>
                    <li>
                        <h3>Is my medical consultation covered under my medical insurance</h3>
                        <p>We know the patient fee system can be very confusing and so we hope this might make it easier to understand and answer any questions you may have.</p>
                    </li>
                    <li>
                        <h3>What is the turnaround time for my results?</h3>
                        <p>We know the patient fee system can be very confusing and so we hope this might make it easier to understand and answer any questions you may have.</p>
                    </li>
                    <li>
                        <h3>Do you offer the Covid-19 vaccine?</h3>
                    </li>
                    <li>
                        <h3>What is the turnaround time for my results?</h3>
                    </li>
                    <li>
                        <h3>Is my medical consultation covered under my medical insurance</h3>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}

export default NewsPage
