import React from "react"

function News() {
    return (
        <section>
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal px-1/24">Latest News</h2>
            </div>
            <div className="bg-black text-white mb-8">
                <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                    <div className="lg:flex lg:flex-wrap lg:justify-between lg:border-r lg:border-l lg:border-white px-1/24">
                        <article className="lg:w-11/24 py-8 lg:mr-1/24 border-b border-white">
                            <h3 className="font-display text-2xl md:text-3xl">Alert level 4</h3>
                            <time className="uppercase block mb-4 text-gray-400">1 Sep, 2021</time>
                            <p className="mb-4">We are still open and conducting mainly phone or video consults. Due to the current alert level, our doors remained locked. If necessary, we can see patients in person. All patients with respiratory symptoms will be seen in our portacom or carpark. Masks needs to be worn. Please call to discuss with our staff the best way to support you. </p>
                        </article>
                        <article className="lg:w-11/24 py-8 lg:ml-1/24 border-b border-white">
                            <h3 className="font-display text-2xl md:text-3xl">Covid 19 testing</h3>
                            <time className="uppercase block mb-4 text-gray-400">1 Sep, 2021</time>
                            <p className="mb-4">We are offering free covid 19 tests to all our enrolled patients. This is by appointment only, please call us.  Please go to our news page for more information</p>
                        </article>
                        <article className="lg:w-11/24 py-8 lg:mr-1/24">
                            <h3 className="font-display text-2xl md:text-3xl">Covid vaccines</h3>
                            <time className="uppercase block mb-4 text-gray-400">1 Sep, 2021</time>
                            <p className="mb-4">At this stage, we are not offering covid 19 vaccines. We are working hard to get this up and running so watch this space!</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News