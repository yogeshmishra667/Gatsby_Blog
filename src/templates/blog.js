
  
import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/Head"

import Layout from '../components/layout'
import blogStyle from "../templates/blog.module.scss"
 

/*contentful/rich-text-react-renderer ==> use for convert json data to react components */
export const query = graphql`
         query($slug: String!) {
           contentfulBlogPost(slug: { eq: $slug }) {
             title
             publishedData(formatString: "MMMM Do YYYY")
             body{
               json
             }
             slug
           }
         }
       ` 

const Blog = ({data}) => {
  
  const options = {
  renderNode:{
   "embedded-asset-block": (node) => { 
  const alt = node.data.target.fields.title['en-US']
  const url = node.data.target.fields.file['en-US'].url
  
    return <img alt={alt} src={url}/>
   } 
  }
}
  
    return (
      <Layout>
        <Head title={data.contentfulBlogPost.slug} />
        <h1 className={blogStyle.head}>{data.contentfulBlogPost.title}</h1>
        <p className={blogStyle.para}>
          {data.contentfulBlogPost.publishedData}
        </p>
        {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
      </Layout>
    )
}

export default Blog;




/*
<h1 className={blogStyle.head}>
          {data.markdownRemark.frontmatter.title}
        </h1>
        <p className={blogStyle.para}>{data.markdownRemark.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          className={blogStyle.data}
        ></div> 
        */