import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../sass/index.scss"


const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Hello, Gatsby!</h1>
        <h3>Welcome to my new Gatsby site...</h3>
    </Layout>
)

export default IndexPage