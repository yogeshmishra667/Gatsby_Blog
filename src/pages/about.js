import React from "react"
import { Link } from "gatsby"
import Head from "../components/Head"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <Head title= "About"/>
      <h1>About me</h1>
      <h3>
        I specialize in front-end web development, and enjoy effectively
        creating and bringing ideas to life in the browsers . I enjoy creating
        web application using React, HTML, CSS, and JavaScript
      </h3>
      <p>
        need developer <Link to="/contact">contect me</Link>
      </p>
    </Layout>
  )
}

export default About
