import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
        html: node.html,
        ...node.frontmatter,
        path: '/blog/' + node.fields.name,
      }));
    return (
    <Layout>
      
      <SEO title="Blog" />
      <div className="container">
      <div className="row">
          <div className="col-lg-12">
          {posts.map((post,index) => (
              <div key={index} className="row">
                  <div className="col-lg-8 mr-auto ml-auto mb-2">
                      <h3 className="text-center"><Link to={post.path}>{post.title}</Link></h3>
                      <img src={post.featured_image} className="img-fluid " />
                      <p dangerouslySetInnerHTML={{ __html: post.html }} />
                  </div>
                  <div className="border-bottom col-lg-12 mb-3"></div>
              </div>
          ))}
          </div>
      </div>
      </div>
    </Layout>
  )
    };
  export const pageQuery = graphql`
    query {
        allMarkdownRemark(filter: {fields: {sourceName: {eq: "blog"}}}) {
            edges {
              node {
                id
                frontmatter {
                  author
                  date
                  title
                  featured_image
                }
                html
                fields {
                    name
                  }
              }
            }
          }
    }
  `;
  export default BlogPage