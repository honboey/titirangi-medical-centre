import * as React from "react"
import Layout from "../components/Layout"
import Announcements from "../components/Announcements"
import Faq from "../components/Faq"


function NewsPage() {
  return (
    <Layout title=" | News & Information">
      <Announcements />
      <div className="wrapper max-w-screen-xl mx-auto p-4 lg:p-8">
        <Faq />
      </div>
    </Layout>
  )
}

export default NewsPage
