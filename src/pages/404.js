import React from 'react'
import { Link } from 'gatsby'
import Head from "../components/Head"
import Layout from '../components/layout'


 const NotFound = () => {
  return (
    <Layout>
      <Head title ='404' />
      <h1>Fuck 404</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
