import React from "react"
import { RichText } from 'prismic-reactjs'
import HtmlSerializer from "../utilities/HtmlSerializer"

function Article(props) {
    return (
        <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
            <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">{props.heading}</h2>
            </div>
            <div className="lg:w-1/2 lg:pl-1/24">
                <RichText htmlSerializer={HtmlSerializer} render={props.body} />
            </div>
        </section>
    )
}

export default Article