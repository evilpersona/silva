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
      <div className="container">
      <div className="row">
          <div className="col-lg-12">
              <div className="col-lg-4 float-left">
          <img src={frontmatter.image} alt="Me" className="img-fluid float-right" />
          </div>
          <div className="col-lg-8 float-right">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
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