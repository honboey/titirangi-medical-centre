import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RichText } from 'prismic-reactjs'
import HtmlSerializer from "../utilities/HtmlSerializer"

function Doctors() {
    const data = useStaticQuery(graphql`
    query DoctorsQuery {
        prismicAbout {
          data {                        
            body {
                ... on PrismicAboutDataBodyDoctorProfiles {
                  id
                  primary {
                    doctor_bio {
                      raw
                    }
                    doctor_position {
                      text
                    }
                    doctor_qualifications {
                      text
                    }
                    doctor_s_name {
                      text
                    }
                    headshot {
                      alt
                      gatsbyImageData
                    }
                  }
                }
            }
          }
        }
      }
    `)

    return (
        <section className="mb-12">
            <h3 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4 ml-1/24">Our doctors</h3>
            <ul className="lg:flex lg:flex-wrap">
                {data.prismicAbout.data.body.map((element) => {
                    return (
                        <>
                            <li className="mb-12 lg:w-4/12 px-1/24">
                                <GatsbyImage 
                                    className="mb-4 w-1/2 lg:w-full" 
                                    image={element.primary.headshot.gatsbyImageData} 
                                    alt={element.primary.headshot.alt} />
                                <h4 className="font-display text-2xl md:text-3xl mb-4">{element.primary.doctor_s_name.text}</h4>
                                <p className="uppercase leading-snug text-gray-500 mb-4">
                                    {element.primary.doctor_position.text}<br />
                                    {element.primary.doctor_qualifications.text}</p>
                                <RichText htmlSerializer={HtmlSerializer} render={element.primary.doctor_bio.raw} />
                            </li>
                        </>
                    )
                })}
            </ul>
        </section>
    )
}

export default Doctors