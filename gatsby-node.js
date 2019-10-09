const path = require('path')

/*module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md') /*it's a part of path in node docs */
        /* it's use for clear path name react.md => react */
     /*   createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}*/

/* createPages use for  generated new pages dynamically */

//get path to templates
//get markdown data
//create new pages

module.exports.createPages = async ({ graphql, actions }) => {
/*the graphql function call returns promise ypo also perform event for resolve promise but this project i'll use asyns await */

    const { createPage } = actions
    /* you need to additional things beyond a slug to create a template components */

    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
                slug
            }
          }
        }
      }
    `)

    res.data.allContentfulBlogPost.edges.forEach(({ node }) => {
      createPage({
        component: blogTemplate,
        path: `/blog/${node.slug}`,
        context: {
          slug: node.slug,
        },
      })
    })
}