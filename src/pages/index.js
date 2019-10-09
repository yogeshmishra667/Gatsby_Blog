import React from "react"
import Head from "../components/Head"

import Layout from "../components/layout"

const indexPage = () => {
  return (
    <Layout>
      <Head title= 'Home' />
      <h1> hello,</h1>
      <h3>
        i'm yogi,
        <br /> frontend developer
        <br />
        I'm a self taught web developer and have passion for self-learning and
        improving my skills day by day.
      </h3>
    </Layout>
  )
}

export default indexPage
