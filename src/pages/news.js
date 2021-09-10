import * as React from "react"
import Layout from "../components/Layout"
import Announcements from "../components/Announcements"
import Faq from "../components/Faq"


function NewsPage({ data }) {
  return (
    <Layout title=" | News & Information">
      <Announcements />

      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
        <section className="px-1/24 border-l border-r border-black">
          <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-8">Clinic information</h2>
          <ul>
            <Faq
              question="What happens when you get a Covid 19 test? "
              answer="All testing is done in the carpark by a doctor. Please write down your name, time of appointment, doctor you are seeing and SURV code (if known) on an A4 page and put it on your dashboard. Wear a mask and keep windows up. You will be swabbed in the carpark - wind your window and opposite window down to give better airflow.  PPE is ineffective in the rain. So if it is raining, please get out of your car and walk to the doctor, one patient at a time. Please maintain social distancing from other patients. " />
            <Faq
              question="How do we get our covid 19 swab result? "
              answer="Ministry of health texts you the result. In busy lockdown times, we have noticed a delay up to 5 days for results. Remain isolated until you get a negative result, or in accordance to Public Health advice. Please visit www.covid19.govt.nz for more information." />
            <Faq
              question="Me or my child have cold symptoms, can I see a doctor?"
              answer="Yes! Our priority is to keep you safe. Even if you have respiratory symptoms, we will still see you. Our staff will be wearing PPE and you will be seen either in our portacom or carpark. When you book your appointment, please tell our receptionist and they will book you accordingly. Remember to wear a mask to your appointment. This is to keep both our staff and patients safe." />
            <Faq
              question="Why do I have to be seen in the portacom with respiratory symptoms, even though I don't have Covid?"
              answer="If you are coughing, sneezing, or have a runny nose - you are still contagious and spreading germs. Even if it isn't Covid, we still want to protect our staff and other patients from becoming infected from any respiratory infection. If anyone were to be infected and develop respiratory symptoms, it means they would need to stop work, isolate and have a covid swab themselves." />
            <Faq
              question="Why do we have to wear masks in the clinic?"
              answer="Masks are mandatory in our clinic. It is difficult to maintain social distancing within our clinic, amongst staff and other patients. To protect all, we have decided to continue wearing masks regardless of the current alert levels. This is to maintain good public health measures and protect our vulnerable. If you do not have a mask, you can buy one at reception for $1." />
            <Faq
              question="How do we get test results?"
              answer="The easiest way to have access to your result is to sign up to our portal, health 365. This will give you access to all your results online. Generally, no news is good news. We do not generally contact you if your results are normal. If there is anything in your results that needs to be discussed - your doctor may contact you directly or through the nurse to either discuss or to. arrange an appointment to go through things." />
            <Faq
              question="Can we request repeat prescriptions?"
              answer="The easiest way to order a repeat prescription is online via our portal, health 365. Alternatively, you can call up to request a repeat prescription. Your enrolled doctor will review your request and either send your prescription to your allocated pharmacy or ask you to come in for a review. They will email you when it is completed. Please make sure we have your email address. Alternatively, the doctor or nurse may call or text you. There is a charge for this service, due to the time and work involved from reception, nurse and doctor. It takes up to 48 hours to complete a request - you can pay an additional surcharge if needing it urgently the same day. Please visit our fees page for more information." />
            <Faq
              question="What if I can't see my enrolled doctor?"
              answer="All staff at the clinic have access to all your medical notes which means there will always be continuity of care." />
            <Faq
              question="Why is there a surcharge for acc consult?"
              answer="ACC unfortunately does not cover all costs of a General Practitioner visit, unlike in some A+M or Emergency services. Therefore, there is a surcharge for all ACC consults. Please refer to our fees page for more information." />
            <Faq
              question="Can we do virtual consults?"
              answer="All doctors offer virtual consults. These can be done via phone, or video through doxyme. The doctor will email you a link to doxyme at the time of your consult. If the doctor feels it will be better to see you in person, they will advise you at the time. This may be necessary, for instance listening to your chest, examine inside your ears, seeing a rash in person." />
            <Faq
              question="Do you do house calls?"
              answer="Though we prefer doing consults in the practice, we do offer house calls to some eg palliative patients on a case by case basis. Please talk to our team about this and refer to our fees schedule for costs." />
            <Faq
              question="Do you offer liquid nitrogen?"
              answer="We can administer liquid nitrogen at our clinic. All doctors and nurses are qualified in doing so. If a nurse is to administer liquid nitrogen to a skin lesion, it needs to be reviewed initially by a doctor before it can be administered. Please book with a doctor initially." />
            <Faq
              question="How do I pay my invoice?"
            />
            <Faq
              question="What happens if I don't show up to my appointment?"
            />
            <Faq
              question="How can I make a complaint?"
              answer="We appreciate all feedback, good and bad. Please talk to your GP or practice manager who will be happy to listen and guide you through this process." />
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default NewsPage
