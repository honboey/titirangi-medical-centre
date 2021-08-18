import * as React from "react"
import Layout from "../components/Layout"

function FeesPage() {
    return (
        <Layout>
            <section>
                <h2>Consultation Fees</h2>
                <table>
                    <tbody>
                        <tr>
                            <th scope="col">Age (years)</th>
                            <th scope="col">Enrolled ($)</th>
                            <th scope="col">Casual ($</th>
                            <th scope="col">CSC holders ($)</th>
                        </tr>
                        <tr>
                            <td>0–12</td>
                            <td>0</td>
                            <td>55</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>13–17</td>
                            <td>47</td>
                            <td>55</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>18–64</td>
                            <td>59</td>
                            <td>85</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>65+</td>
                            <td>50</td>
                            <td>85</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </table>
            </section >
            <section>
                <h2>Service fees</h2>
                <table>
                    <tr>
                        <th scope="col">Smears</th>
                        <td scope="col">Fee ($)</td>
                    </tr>
                    <tr>
                        <td>Smear only</td>
                        <td>Consultation + 25</td>
                    </tr>
                    <tr>
                        <td>Smear + doctors consult</td>
                        <td>Consultation + 25</td>
                    </tr>
                    <tr>
                        <th scope="col" colspan="2">ECG</th>
                    </tr>
                    <tr>
                        <td>With doctor appointment</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>With nurse</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <th scope="col" colspan="2">Nurse charges</th>
                    </tr>
                    <tr>
                        <td>Consult</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Luquid nitrogen</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Blood pressure</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Injections</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Dressings (non-ACC)</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Depo</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <th scope="col" colspan="2">Prescriptions</th>
                    </tr>
                    <tr>
                        <td>Pick up / emailed from centre (13 years +)</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>CSC emailed</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>CSC urgent / same day collection</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Urgent / same day collection</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>13+ years</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Under 13 years</td>
                        <td>25</td>
                    </tr>
                </table>
            </section>
            <section>
                <h2>The patient fee system in New Zealand</h2>
                <p>We know the patient fee system can be very confusing and so we hope this might make it easier to understand and answer any questions you may have.</p>
                <p>When you enrol at a chosen general practice the government provides some funding towards your medical care at that practice. In order to be eligible to receive this funding, you need to be a New Zealand Citizen or Resident, or be here on a work visa valid for at least two years.</p>
                <p>Due to audits by the Ministry of Health, for every patient we need to hold a signed enrolment form and be able to supply proof of eligibility for patients born outside of New Zealand. However this funding only comes through quarterly, in January, April, July and October of each year which means if you enrol in February, for example, you are not funded until April (from which time you are charged the reduced enrolled patient fee).</p>
                <p>Different General Practices can receive very different amounts of funding from the government, depending on characteristics of their enrolled patient population and the area which the practice is in. For this reason fees between different practices can differ significantly which is completely out of our control. Practices that can charge lower fees get substantially more funding from the government, enabling them to do so. The government approves fees that are charged by all practices.</p>
                <p>As the government already subsidises your fees when you are an enrolled patient, there is no additional subsidy if you have a community services card. However if you are a visitor or you are seen at an after-hours clinic, then there should be a reduced fee. </p>
                <p>ACC consults are not covered by this government funding. Instead, ACC will pay part of your visit and you will be liable for the rest of the cost.</p>
                <p>In order for the funding to continue you need to be seen at least once every three years or otherwise sign a new enrolment form every three years. It is very important that you keep your contact details up-to-date as we will notify you when this time approaches.</p>
                <p>If you are spending more than 183 days (approx. 6 months) in a twelve month period outside of New Zealand, you will not be eligible for government funding and must advise our practice. We can still see you as a casual patient when you are here, but you will be required to pay the full consult fee.</p>
                <p>Due to doctor availability, we are generally only able to offer visitor appointments for family of our enrolled patients unless there are medically urgent circumstances.</p>
            </section>
        </Layout >
    )
}

export default FeesPage