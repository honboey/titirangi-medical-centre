import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

function NewsPage() {
    return (
        <Layout title=" | News & Information">
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
                            <p className="mb-4">We are offering free covid 19 tests to all our enrolled patients. This is by appointment only, please call us. Please go to our <Link to="/news">news page</Link> for more information</p>
                        </article>
                        <article className="lg:w-1/2 px-1/24  py-8 border-b border-white">
                            <h3 className="font-display text-2xl md:text-3xl">Covid vaccines</h3>
                            <time className="uppercase block mb-4 text-gray-400">1 Sep, 2021</time>
                            <p className="mb-4">At this stage, we are not offering covid 19 vaccines. We are working hard to get this up and running so watch this space!</p>
                        </article>
                    </div>
                </div>
            </section>
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
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
            </div>


        </Layout>
    )
}

export default NewsPage
