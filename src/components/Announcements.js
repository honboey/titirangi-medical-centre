import React from "react"

function Announcements(props) {
    return (
        <article className="lg:w-11/24 py-8 lg:mr-1/24 border-b border-white">
            <h3 className="font-display text-2xl md:text-3xl">{props.heading}</h3>
            <time className="uppercase block mb-4 text-gray-400">{props.timestamp}</time>
            <p className="mb-4">{props.body}</p>
        </article>
    )
}

export default Announcements
