import * as React from "react"
import Layout from "../components/Layout"

function PageNotFound() {
  return (
    <Layout title="Page not found">
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
        <section className="border-r border-l border-black pl-1/24 pr-1/24 mb-8">
          <div className="py-8 lg:flex">
            <h2 className="font-display text-4xl md:text-6xl leading-snug md:leading-normal lg:w-8/12 lg:border-r lg:border-black lg:pr-1/24 mb-8">Sorry – we haven't been able to find the page you were after.</h2>
            <div className="lg:w-4/12 lg:px-1/24 lg:pt-8">
              <p>Please use the navigation menu above to get to the correct page, otherwise drop us a line at <a href="mailto:admin@titirangimc.co.nz">admin@titirangimc.co.nz</a> if you can't find the information you were looking for.</p>
            </div>
          </div>
        </section> 
      </div>
    </Layout>
  )
}

export default PageNotFound

