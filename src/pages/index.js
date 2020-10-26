import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import About from "../components/sections/about"
import Policy from "../components/sections/policy"
import Contact from "../components/sections/contact"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <About />
    <Policy />
    <Contact />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
