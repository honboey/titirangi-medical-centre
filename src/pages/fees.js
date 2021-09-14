import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Article from "../components/Article"

function FeesPage({ data }) {
    const doc = data.prismicFees.data
    console.log(doc)

    const consultationFees = data.prismicFees.data.body.filter(element =>
        element.slice_type === "consultation_fees"
    )
    const serviceFees = data.prismicFees.data.body.filter(element =>
        element.slice_type === "service_fees"
    )

    return (
        <Layout title=" | Fees">
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <section className="border-l border-r border-black px-1/24 py-8 mb-24">
                    <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Consultation Fees</h2>
                    <table className="w-full">
                        <tbody>
                            {consultationFees[0].items.map((element, index) => {
                                if (element.age.raw[0].type === "paragraph") {
                                    return (
                                        <tr key={index}>
                                            <td className="py-4 border-b border-black">{element.age.raw[0].text}</td>
                                            <td className="text-right py-4 border-b border-black">{element.enrolled.raw[0].text}</td>
                                            <td className="text-right py-4 border-b border-black">{element.casual.raw[0].text}</td>
                                            <td className="text-right py-4 border-b border-black">{element.csc.raw[0].text}</td>
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr className="font-display text-2xl md:text-3xl border-b-2 border-black" key={index}>
                                            <th scope="col" className="text-left font-light pb-4">{element.age.raw[0].text}</th>
                                            <th scope="col" className="text-right font-light pb-4">{element.enrolled.raw[0].text}</th>
                                            <th scope="col" className="text-right font-light pb-4">{element.casual.raw[0].text}</th>
                                            <th scope="col" className="text-right font-light pb-4">{element.csc.raw[0].text}</th>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </section>

                <section className="border-l border-r border-black px-1/24 py-8 mb-24">
                    <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Service fees</h2>
                    <table className="w-full">
                        <tbody>
                            {serviceFees[0].items.map((element, index) => {
                                if (element.fee.raw[0].type === "paragraph") {
                                    return (
                                        <tr key={index}>
                                            <td className="py-4 border-b border-black">{element.service.raw[0].text}</td>
                                            <td className="text-right py-4 border-b border-black">{element.fee.raw[0].text}</td>
                                        </tr>
                                    )
                                } else {
                                    return (
                                        <tr className="font-display text-2xl md:text-3xl border-b-2 border-black" key={index}>
                                            <th scope="col" className="text-left font-light py-4">{element.service.raw[0].text}</th>
                                            <th scope="col" className="text-right font-light py-4">{element.fee.raw[0].text}</th>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </section>

                <Article 
                  heading={doc.the_patient_fee_system.raw[0].text}
                  body={doc.body1.raw}/>
                
            </div>
        </Layout >
    )
}

export default FeesPage

export const query = graphql`
  query FeesQuery {
    prismicFees {
      data {
        body {
          ... on PrismicFeesDataBodyConsultationFees {
            id
            slice_type
            items {
              age {
                raw
              }
              casual {
                raw
              }
              csc {
                raw
              }
              enrolled {
                raw
              }
            }
          }
          ... on PrismicFeesDataBodyServiceFees {
            id
            slice_type
            items {
              fee {
                raw
              }
              service {
                raw
              }
            }
          }
        }
        body1 {
          raw
        }
        the_patient_fee_system {
          raw
        }
      }
    }
  }  
`