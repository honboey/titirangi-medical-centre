import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import htmlSerializer from "../utilities/htmlSerializer"
import CustomLink from "../utilities/CustomLink"
import Layout from "../components/Layout"
import Doctors from "../components/Doctors"

function AboutPage({ data }) {
    const doc = data.prismicAbout.data
    console.log(doc)

    return (
        <Layout title=" | About">
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">{doc.page_title.raw[0].text}</h2>
                    </div>
                    <div className="lg:w-1/2 lg:pl-1/24">
                        <RichText htmlSerializer={htmlSerializer} serializeHyperlink={CustomLink} render={doc.page_introduction.raw} />
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4 ml-1/24">Our doctors</h3>
                    <ul className="lg:flex lg:flex-wrap">
                        {doc.body.map((element, index) => {
                            return (
                                <Doctors
                                    key={element.id}
                                    image={element.primary.headshot.gatsbyImageData}
                                    alt={element.primary.headshot.alt}
                                    name={element.primary.doctor_s_name.text}
                                    position={element.primary.doctor_position.text}
                                    qualifications={element.primary.doctor_qualifications.text}
                                    about={element.primary.doctor_bio.raw}
                                />
                            )
                        })}
                    </ul>
                </section>

                <section className="border-l border-black px-1/24 py-8 mb-24">
                    <h3 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Our nursing and support staff</h3>
                    <div className="lg:flex lg:justify-end">
                        <figure className="lg:w-3/4 mb-8">
                            <StaticImage src="../images/staff.jpg" alt="The Titirangi Medical Centre staff" />
                            <figcaption className="text-xs">Photo by James Green</figcaption>
                        </figure>
                    </div>
                    <div className="lg:w-1/2">
                        <h4 className="font-display text-2xl md:text-3xl mb-4">Out team</h4>
                        <p>Our very capable nursing team is lead by nurse manager, Lauren Santoromito. They have years of experience in chronic care management, immunisations, infusions, liquid nitrogen, injections and complicated wound dressings. Our friendly administration team is lead by practice manager, Rowena Coleman who are more than happy to answer your questions or guide you in the right direction.</p>
                    </div>
                </section>

                <section className="lg:w-11/12 lg:mx-auto lg:flex lg:items-center mb-8">
                    <figure className="mb-4 w-full lg:w-14/22 lg:border-r lg:border-black lg:pr-1/22 lg:pt-4">
                        <StaticImage className="" src="../images/fern.jpg" alt="Waitakere beach" />
                        <figcaption className="text-xs">Photo by <a href="https://unsplash.com/@utsmanmedia">Utsman Media</a></figcaption>
                    </figure>
                    <div className="flex justify-end lg:w-8/22 lg:pl-1/22">
                        <div className="w-8/12 lg:w-full pl-1/24 lg:pl-0 py-6 mb-8 border-l border-black lg:border-0">
                            <h3 className="font-display text-2xl md:text-3xl mb-4">Services</h3>
                            <ul>
                                <li>General Medical Consultations</li>
                                <li>Accident and wound care</li>
                                <li>Well Persons and Child Checks</li>
                                <li>Skin Cancer Checks</li>
                                <li>ECG’s</li>
                                <li>Minor Surgery</li>
                                <li>Family Planning</li>
                                <li>Cardiovascular Management</li>
                                <li>Diabetes Management</li>
                                <li>Sexual Health</li>
                                <li>LGBTQIA+ health</li>
                                <li>Travel Care</li>
                                <li>Flu Vaccinations</li>
                                <li>Childhood immunisations</li>
                                <li>Dressings</li>
                                <li>Liquid Nitrogen</li>
                                <li>Smoking Cessation Support</li>
                                <li>Weight Management</li>
                                <li>Iron and aclasta infusions</li>
                                <li>Drivers licence medicals</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="border-l border-r border-black py-8 mb-24 lg:flex">
                    <div className="lg:w-1/2 px-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Our history</h2>
                    </div>
                    <div className="lg:w-1/2 px-1/24">
                        <p className="mb-4">Titirangi Medical Centre was founded by Dr Robert Lusk in 1950. It was initially based in New Lynn and was a group practice of 4 doctors (including Dr Jacobsen and Dr Smith). In the 1960s, it moved next door to the Titirangi Post Office before relocating in 1981 to 2 Rangiwai Road, where it is located today. It is in fact a converted patient's home!</p>
                        <p className="mb-4">Over the many years, Titirangi Medical Centre has been a pillar in the vibrant Titirangi Community. It has taken care of many generations of west Auckland families and seen many a chicken roam the street. There has been a total of 13 partners. </p>
                        <ul className="mb-4">
                            <li>Dr Robert Lusk</li>
                            <li>Dr Gordon Jacobsen</li>
                            <li>Dr John Lovell Smith</li>
                            <li>Dr John Lusk</li>
                            <li>Dr David Crabb</li>
                            <li>Dr Lindsay Green</li>
                            <li>Dr Keith Wilson</li>
                            <li>Dr Suzanne Williamson</li>
                            <li>Dr Sheetal Patel</li>
                            <li>Dr Fiona Darracott-Cankovic</li>
                        </ul>
                        <p className="mb-4">Today, the partners comprise of Dr Stephen Wong, Dr Michelle Conning and Dr Su-Lin Boey. Together with our 2 GP associates, friendly nurses, admin and the occasional chicken, we continue to serve and take care of the many generations of families in this beautiful corner of the Waitakere Ranges.</p>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    prismicAbout {
      data {
        page_title {
            raw
          }
        page_introduction {
            raw
        }
        our_doctors {
            raw
          }
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
        services_image {
            gatsbyImageData
          } 
        services {
            raw
          }
        history {
          raw
        }
        staff_image {
            gatsbyImageData
          }
        staff {
          raw
        }
      }
    }
  }
`