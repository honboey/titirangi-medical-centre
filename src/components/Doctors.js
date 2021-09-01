import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Doctors(props) {
    return (
        <li className="mb-12 lg:w-4/12 px-1/24">
            <StaticImage className="mb-4 w-1/2 lg:w-full" src="../images/profile.jpg" />
            <h4 className="font-display text-2xl md:text-3xl mb-4">{props.name}</h4>
            <p className="uppercase leading-snug text-gray-500 mb-4">{props.position}<br />
                {props.qualifications}</p>
            <p>{props.about}</p>
        </li>
    )
}

export default Doctors