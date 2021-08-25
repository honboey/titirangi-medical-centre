import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Hero(props) {
    return (
        <section className="mb-8">
            <figure className="mb-4 w-full lg:w-21/24">
                <GatsbyImage image={props.image} alt=""/>
                <figcaption className="text-xs">{props.figCaption}</figcaption>
            </figure>
            <div className="flex justify-end">
                <div className="w-8/12 lg:w-1/2 pl-4 lg:px-8 py-6 mb-8 border-l border-black">
                    <h3 className="font-display text-2xl md:text-3xl mb-4">{props.header}</h3>
                    <p>{props.body}</p>
                </div>
            </div>
        </section>
    )
}

export default Hero

