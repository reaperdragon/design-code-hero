import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/layout/Header"
import Layout from "../components/layout/layout"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Design + Code Hero Clone</title>
      </Helmet>
      <Header />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage
