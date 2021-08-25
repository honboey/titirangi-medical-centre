import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

function ImageAndTextLeft() {
    return (
        <section className="lg:w-21/24 lg:flex lg:items-center lg:ml-16 mb-8">
            <figure className="mb-4 w-full lg:w-2/3 lg:order-2 lg:border-l lg:border-black lg:pl-8 lg:pt-4">
                <StaticImage className="" src="../images/silver-fern.jpg" alt="Silver fern" />
                <figcaption className="text-xs">Photo by <a href="https://unsplash.com/@picsbyjameslee">James Lee</a></figcaption>
            </figure>
            <div className="flex justify-end lg:w-1/3 w-8/12 lg:order-1">
                <div className="py-6 pr-4 lg:pr-4 mb-8 border-r border-black lg:border-0 lg:mr-8">
                    <h3 className="font-display text-2xl md:text-3xl mb-4">New Patients</h3>
                    <p>Our books are currently open and we welcome to enrolments. To enrol please visit the Enrol page to find out the fastest and easiest way to do so.</p>
                </div>
            </div>
      </section>
    )
}

export default ImageAndTextLeft