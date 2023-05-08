import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/Container"
import Panel from "../components/Panel"

const IndexPage = () => (
  <Layout>
    <Container />
    <Panel />
  </Layout>
)

export const Head = () => <Seo title="What's dizz ->" />

export default IndexPage
