import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"

import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <Head title ='contact us' />
      <h1>Contact us</h1>
      <h3>
        it is sometimes known, is dummy text used in laying out print, graphic
        or web designs. The passage is attributed to an unknown typesetter in
        the 15th century who is thought to have scrambled parts of Cicero's De
        Finibus Bonorum et Malorum for use in a type specimen book.
      </h3>
      <p>
        you can join me <Link to="/Blog">click here</Link>{" "}
      </p>
    </Layout>
  )
}
export default contact
