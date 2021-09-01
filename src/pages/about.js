import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

function AboutPage() {
    return (
        <Layout title=" | About">
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <section className="border-l border-r border-black px-1/24 py-8 mb-8 lg:flex">
                    <div className="lg:w-1/2 lg:pr-1/24 lg:border-r lg:border-black">
                        <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4">About our clinic</h2>
                    </div>
                    <div className="lg:w-1/2 lg:pl-1/24">
                        <p className="mb-4">At recte se vit ernam remperc hicatquamet venim ent as et eturit, vendae cullaturent vendiciis molorem dolora cusdamenia quam el magnis duci to officto taecae voloreius ario destiae coneceprae dolo tem vene vernatis remqui volaoresequam iumquid magniant.</p>
                        <p className="mb-4">Imus, to beroressimet eossit atur?</p>
                        <p className="mb-4">Derum qui voluptam in pro et quam, as se offic temporeium quam laut vellabo. Cest, omnimusande con nulluptati iducimusam ratur? Quisqua spiducipsame mi, qui debis aboribus, imus est, a velitam non porate que eaturep elest, volorep ratur?eostiantio beaquiae si reribus ea cum volupti beatiam volento tatibernatis nime rernam nonsedia dempera cuptat et volorerum rem doloressum consequatum sam, core lam quatium velit dis</p>
                    </div>
                </section>

                <section className="mb-12">
                    <h3 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal mb-4 ml-1/24">Our doctors</h3>
                    <ul className="lg:flex lg:flex-wrap">
                        <li className="mb-12 lg:w-4/12 px-1/24">
                            <StaticImage className="mb-4 w-1/2 lg:w-full" src="../images/profile.jpg" />
                            <h4 className="font-display text-2xl md:text-3xl mb-4">Dr Stephen Wong</h4>
                            <p className="uppercase leading-snug text-gray-500 mb-4">General Practionery<br />
                                Vocationally registered</p>
                            <p>Nam, sitas solorem quam eos erehendest omniendisit que cone porepudam enisci sequi cus voluptias des del id que parum natur aut experum endigni con reprerro esecta voluptat molupta sinciet que pa consequam quae rem que prepere pellorum experum</p>
                        </li>
                        <li className="mb-12 lg:w-4/12 px-1/24">
                            <StaticImage className="mb-4 w-1/2 lg:w-full" src="../images/profile.jpg" />
                            <h4 className="font-display text-2xl md:text-3xl mb-4">Dr Michelle Conning</h4>
                            <p className="uppercase leading-snug text-gray-500 mb-4">General Practionery<br />
                                Vocationally registered</p>
                            <p>Nam, sitas solorem quam eos erehendest omniendisit que cone porepudam enisci sequi cus voluptias des del id que parum natur aut experum endigni con reprerro esecta voluptat molupta sinciet que pa consequam quae rem que prepere pellorum experum</p>
                        </li>
                        <li className="mb-12 lg:w-4/12 px-1/24">
                            <StaticImage className="mb-4 w-1/2 lg:w-full" src="../images/profile.jpg" />
                            <h4 className="font-display text-2xl md:text-3xl mb-4">Dr Su-Lin Boey</h4>
                            <p className="uppercase leading-snug text-gray-500 mb-4">General Practionery<br />
                                Vocationally registered</p>
                            <p>Nam, sitas solorem quam eos erehendest omniendisit que cone porepudam enisci sequi cus voluptias des del id que parum natur aut experum endigni con reprerro esecta voluptat molupta sinciet que pa consequam quae rem que prepere pellorum experum</p>
                        </li>
                        <li className="mb-8 lg:w-4/12 px-1/24">
                            <StaticImage className="mb-4 w-1/2 lg:w-full" src="../images/profile.jpg" />
                            <h4 className="font-display text-2xl md:text-3xl mb-4">Dr Vivien Teh</h4>
                            <p className="uppercase leading-snug text-gray-500 mb-4">General Practionery<br />
                                Vocationally registered</p>
                            <p>Nam, sitas solorem quam eos erehendest omniendisit que cone porepudam enisci sequi cus voluptias des del id que parum natur aut experum endigni con reprerro esecta voluptat molupta sinciet que pa consequam quae rem que prepere pellorum experum</p>
                        </li>
                        <li className="mb-12 lg:w-4/12 px-1/24">
                            <StaticImage className="mb-4 w-1/2 lg:w-full" src="../images/profile.jpg" />
                            <h4 className="font-display text-2xl md:text-3xl mb-4">Dr Rorie Brown</h4>
                            <p className="uppercase leading-snug text-gray-500 mb-4">General Practionery<br />
                                Vocationally registered</p>
                            <p>Nam, sitas solorem quam eos erehendest omniendisit que cone porepudam enisci sequi cus voluptias des del id que parum natur aut experum endigni con reprerro esecta voluptat molupta sinciet que pa consequam quae rem que prepere pellorum experum</p>
                        </li>

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
                        <h4 className="font-display text-2xl md:text-3xl mb-4">Nam, sitas solorem quam</h4>
                        <p>Eos erehendest omniendisit que cone porepudam enisci sequi cus voluptias des del id que parum natur aut experum endigni con reprerro esecta voluptat molupta sinciet que pa consequam quae rem que prepere pellorum experum que que nobis eribea ducienectis pla volor alicid ullam am ium et ommo cusandi andebitibus. Perectempos am faccus expliquae pos sit que dolor simil eari delendi genimi, nam faccupt ationsequam rerumet harcia alibus aligendaes ut aut quam.</p>
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
                                <li>General Medical</li>
                                <li>Consultation</li>
                                <li>Accident Care </li>
                                <li>Well Man & Woman Checks</li>
                                <li>Skin Cancer Check </li>
                                <li>ECG’s </li>
                                <li>Minor Surgery</li>
                                <li>Well Child Checks Family Planning Acupuncture</li>
                                <li>Cardiovascular</li>
                                <li>Management</li>
                                <li>Diabetes</li>
                                <li>Management</li>
                                <li>Holistic/Herbal/Nutritional</li>
                                <li>Medicine</li>
                                <li>Sexual Health Travel Care Flu Vaccinations</li>
                                <li>Childhood immunisations Dressings</li>
                                <li>Liquid Nitrogen</li>
                                <li>Smoking Cessation Support Weight Management </li>
                                <li>Laser</li>
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