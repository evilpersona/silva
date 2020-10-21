import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
    return (
    <Layout>
      
      <SEO title="About" />
      <div className="container-fluid">
      <div className="row">
          <div className="col-lg-12">
          <img src={frontmatter.image} alt="Me" className="img-fluid float-left col-lg-4" />
          <p dangerouslySetInnerHTML={{ __html: html }} />
          </div>
      </div>
      </div>
    </Layout>
  )
    };
  export const pageQuery = graphql`
    query {
        markdownRemark(fields: {name: {eq: "about"}}) {
            frontmatter {
              image
            }
            html
          }
    }
  `;
  export default AboutPage