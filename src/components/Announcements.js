import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import HtmlSerializer from "../utilities/HtmlSerializer"

function Announcements() {
    const data = useStaticQuery(graphql`
        query AnnouncementsQuery {
            prismicNewsAndInformations {
                data {
                    body {
                        ... on PrismicNewsAndInformationsDataBodyNews {
                            id
                            primary {
                            announcement {
                                raw
                            }
                            announcement_title {
                                text
                            }
                            date_of_announcement(formatString: "DD MMMM YYYY")
                            featured
                            }
                            slice_type
                        }
                    }
                }
            }
        }
    `)
    const announcementsArray = data.prismicNewsAndInformations.data.body.filter(element => element.slice_type === "news")

    return (
        <section>
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal px-1/24">Latest News</h2>
            </div>
            <div className="bg-black text-white mb-8">
                <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                    <div className="lg:flex lg:flex-wrap lg:justify-between px-1/24">
                        {announcementsArray.map((element, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <article className="lg:w-11/24 py-8 lg:mr-1/24 border-b border-white" key={element.id}>
                                        <h3 className="font-display text-2xl md:text-3xl">{element.primary.announcement_title.text}</h3>
                                        <time className="uppercase block mb-4 text-gray-400">{element.primary.date_of_announcement}</time>
                                        <RichText htmlSerializer={HtmlSerializer} render={element.primary.announcement.raw} />
                                    </article>
                                )
                            } else {
                                return (
                                    <article className="lg:w-11/24 py-8 lg:ml-1/24 border-b border-white" key={element.id}>
                                        <h3 className="font-display text-2xl md:text-3xl">{element.primary.announcement_title.text}</h3>
                                        <time className="uppercase block mb-4 text-gray-400">{element.primary.date_of_announcement}</time>
                                        <RichText htmlSerializer={HtmlSerializer} render={element.primary.announcement.raw} />
                                    </article>
                                )
                            }
                        })}                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Announcements
