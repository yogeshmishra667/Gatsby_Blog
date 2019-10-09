import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/Head'

import Layout from '../components/layout'
import Blogs from "../pages/Blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: { fields: publishedData }) {
        edges {
          node {
            title
            slug
            publishedData(formatString: "MMMM Do YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title ="Blog" />
      <h1>Blog</h1>
      <ol className={Blogs.posts}>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          return (
            <li className={Blogs.post}>
              <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p>{node.publishedData}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage