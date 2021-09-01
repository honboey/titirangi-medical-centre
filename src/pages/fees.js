import * as React from "react"
import Layout from "../components/Layout"

function FeesPage() {
    return (
        <Layout title=" | Fees">
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <section className="border-l border-r border-black px-1/24 py-8 mb-24">
                    <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Consultation Fees</h2>
                    <table className="w-full">
                        <tbody>
                            <tr className="font-display text-2xl md:text-3xl border-b-2 border-black">
                                <th scope="col" className="text-left font-light pb-4">Age</th>
                                <th scope="col" className="text-right font-light pb-4">Enrolled</th>
                                <th scope="col" className="text-right font-light pb-4">Casual</th>
                                <th scope="col" className="text-right font-light pb-4">CSC</th>
                            </tr>
                            <tr>
                                <td className="py-4 border-b border-black">0–12</td>
                                <td className="text-right py-4 border-b border-black">0</td>
                                <td className="text-right py-4 border-b border-black">55</td>
                                <td className="text-right py-4 border-b border-black">15</td>
                            </tr>
                            <tr>
                                <td className="py-4 border-b border-black">13–17</td>
                                <td className="text-right py-4 border-b border-black">47</td>
                                <td className="text-right py-4 border-b border-black">55</td>
                                <td className="text-right py-4 border-b border-black">15</td>
                            </tr>
                            <tr>
                                <td className="py-4 border-b border-black">18–64</td>
                                <td className="text-right py-4 border-b border-black">59</td>
                                <td className="text-right py-4 border-b border-black">85</td>
                                <td className="text-right py-4 border-b border-black">15</td>
                            </tr>
                            <tr>
                                <td className="py-4 border-b border-black">65+</td>
                                <td className="text-right py-4 border-b border-black">50</td>
                                <td className="text-right py-4 border-b border-black">85</td>
                                <td className="text-right py-4 border-b border-black">15</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="border-l border-r border-black px-1/24 py-8 mb-24">
                    <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">Service fees</h2>
                    <table className="w-full">
                        <tr className="font-display text-2xl md:text-3xl border-b-2 border-black">
                            <th scope="col" className="text-left font-light pb-4">Smears</th>
                            <th scope="col" className="text-right font-light pb-4">Fee ($)</th>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Smear only</td>
                            <td className="text-right py-4 border-b border-black">Consultation + 25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Smear + doctors consult</td>
                            <td className="text-right py-4 border-b border-black">Consultation + 25</td>
                        </tr>
                        <tr className="font-display text-2xl md:text-3xl border-b-2 border-black">
                            <th scope="col" colspan="2" className="text-left font-light py-4">ECG</th>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">With doctor appointment</td>
                            <td className="text-right py-4 border-b border-black">50</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">With nurse</td>
                            <td className="text-right py-4 border-b border-black">50</td>
                        </tr>
                        <tr className="font-display text-2xl md:text-3xl border-b-2 border-black">
                            <th scope="col" colspan="2" className="text-left font-light py-4">Nurse charges</th>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Consult</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Luquid nitrogen</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Blood pressure</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Injections</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Dressings (non-ACC)</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Depo</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr className="font-display text-2xl md:text-3xl border-b-2 border-black">
                            <th scope="col" colspan="2" className="text-left font-light py-4">Prescriptions</th>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Pick up / emailed from centre (13 years +)</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">CSC emailed</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">CSC urgent / same day collection</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Urgent / same day collection</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">13+ years</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                        <tr>
                            <td className="py-4 border-b border-black">Under 13 years</td>
                            <td className="text-right py-4 border-b border-black">25</td>
                        </tr>
                    </table>
                </section>
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">The patient fee system in New Zealand</h2>
                        <p className="font-display text-2xl md:text-3xl mb-4">We know the patient fee system can be very confusing and so we hope this might make it easier to understand and answer any questions you may have.</p>
                    </div>
                    <div className="lg:w-1/2 lg:pl-1/24">
                        <p className="mb-4">When you enrol at a chosen general practice the government provides some funding towards your medical care at that practice. In order to be eligible to receive this funding, you need to be a New Zealand Citizen or Resident, or be here on a work visa valid for at least two years.</p>
                        <p className="mb-4">Due to audits by the Ministry of Health, for every patient we need to hold a signed enrolment form and be able to supply proof of eligibility for patients born outside of New Zealand. However this funding only comes through quarterly, in January, April, July and October of each year which means if you enrol in February, for example, you are not funded until April (from which time you are charged the reduced enrolled patient fee).</p>
                        <p className="mb-4">Different General Practices can receive very different amounts of funding from the government, depending on characteristics of their enrolled patient population and the area which the practice is in. For this reason fees between different practices can differ significantly which is completely out of our control. Practices that can charge lower fees get substantially more funding from the government, enabling them to do so. The government approves fees that are charged by all practices.</p>
                        <p className="mb-4">As the government already subsidises your fees when you are an enrolled patient, there is no additional subsidy if you have a community services card. However if you are a visitor or you are seen at an after-hours clinic, then there should be a reduced fee. </p>
                        <p className="mb-4">ACC consults are not covered by this government funding. Instead, ACC will pay part of your visit and you will be liable for the rest of the cost.</p>
                        <p className="mb-4">In order for the funding to continue you need to be seen at least once every three years or otherwise sign a new enrolment form every three years. It is very important that you keep your contact details up-to-date as we will notify you when this time approaches.</p>
                        <p className="mb-4">If you are spending more than 183 days (approx. 6 months) in a twelve month period outside of New Zealand, you will not be eligible for government funding and must advise our practice. We can still see you as a casual patient when you are here, but you will be required to pay the full consult fee.</p>
                        <p className="mb-4">Due to doctor availability, we are generally only able to offer visitor appointments for family of our enrolled patients unless there are medically urgent circumstances.</p>
                    </div>
                </section>            
            </div>
        </Layout >
    )
}

export default FeesPage