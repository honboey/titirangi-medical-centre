import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { RichText } from 'prismic-reactjs'
import htmlSerializer from "../utilities/htmlSerializer"

function Doctors(props) {
    return (
        <li className="mb-12 lg:w-4/12 px-1/24">
            <GatsbyImage className="mb-4 w-1/2 lg:w-full" image={props.image} alt={props.alt} />
            <h4 className="font-display text-2xl md:text-3xl mb-4">{props.name}</h4>
            <p className="uppercase leading-snug text-gray-500 mb-4">
                {props.position}<br />
                {props.qualifications}</p>
            <RichText htmlSerializer={htmlSerializer} render={props.about} />
        </li>
    )
}

export default Doctors