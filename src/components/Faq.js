import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"


function Faq() {
    const [faqOpen, setFaqOpen] = useState(false);
    function toggleFaq() {
        return setFaqOpen(!faqOpen)
    }

    const data = useStaticQuery(graphql`
        query FaqsQuery {
            prismicNewsAndInformations {
              data {
                body {
                  ... on PrismicNewsAndInformationsDataBodyClinicInformation {
                    id
                    slice_type
                    primary {
                      faq_answer {
                        text
                      }
                      faq_question {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
    `)
    const faqArray = data.prismicNewsAndInformations.data.body.filter(element => element.slice_type === "clinic_information")

    return (
        <section className="px-1/24 border-l border-r border-black">
            <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-8">Clinic information</h2>
            <ul >
                {
                    faqArray.map((element) => {
                        return (
                            <li className="mb-8" key={element.id}>
                                <div className="flex items-start mb-2">
                                    <button className="w-1/12 pr-2 pt-2" onClick={toggleFaq} aria-label="Reveal answer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                    <button className="text-left w-23/24" onClick={toggleFaq}>
                                        <h3 className="font-display text-2xl md:text-3xl">{element.primary.faq_question.text}</h3>
                                    </button>
                                </div>
                                <p className={faqOpen ? "ml-1/12 lg:w-7/12" : "hidden"}>{element.primary.faq_answer.text}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Faq
