import React from "react"

function Announcements() {
    return (
        <section>
            <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal px-1/24">Latest News</h2>
            </div>
            <div className="bg-black text-white mb-8">
                <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
                    <div className="lg:flex lg:flex-wrap lg:justify-between lg:border-r lg:border-l lg:border-white px-1/24">

                        <article className="lg:w-11/24 py-8 lg:mr-1/24 border-b border-white">
                            <h3 className="font-display text-2xl md:text-3xl">Test heading</h3>
                            <time className="uppercase block mb-4 text-gray-400">18 September, 2021</time>
                            <p className="mb-4">Lorem ipsum of some text that chills here.</p>
                        </article>
                        <article className="lg:w-11/24 py-8 lg:ml-1/24 border-b border-white">
                            <h3 className="font-display text-2xl md:text-3xl">Test heading</h3>
                            <time className="uppercase block mb-4 text-gray-400">18 September, 2021</time>
                            <p className="mb-4">Lorem ipsum of some text that chills here.</p>
                        </article>
                        <article className="lg:w-11/24 py-8 lg:mr-1/24 border-b border-white">
                            <h3 className="font-display text-2xl md:text-3xl">Test heading</h3>
                            <time className="uppercase block mb-4 text-gray-400">18 September, 2021</time>
                            <p className="mb-4">Lorem ipsum of some text that chills here.</p>
                        </article>
                        <article className="lg:w-11/24 py-8 lg:ml-1/24 border-b border-white">
                            <h3 className="font-display text-2xl md:text-3xl">Test heading</h3>
                            <time className="uppercase block mb-4 text-gray-400">18 September, 2021</time>
                            <p className="mb-4">Lorem ipsum of some text that chills here.</p>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Announcements
