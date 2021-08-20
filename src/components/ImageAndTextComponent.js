import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, GatbsyImage } from "gatsby-plugin-image"

function ImageAndTextComponent(props) {
    return (
        <section>
            <figure className="mb-4">
                <img className="w-full lg:w-21/24" src="../images/clinic.jpg" alt=""/>
                <figcaption className="text-xs">{props.figCaption}</figcaption>
            </figure>
            <div class="w-8/12 pl-4 py-6 mb-8 border-l border-black float-right">
                <h3 className="font-display text-2xl">{props.header}</h3>
                <p>{props.body}</p>
            </div>
        </section>
    )
}

export default ImageAndTextComponent

