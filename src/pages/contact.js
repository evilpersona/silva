import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => {
    const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
    return (
    <Layout>
      
      <SEO title="Store" />
      <div className="container-fluid">
      <div className="row">
          <div className="col-lg-12">
          <a className="text-center" href={`mailto:${frontmatter.email}`}>Email Me</a>
          </div>
      </div>
      </div>
    </Layout>
  )
    };
  export const pageQuery = graphql`
    query {
        markdownRemark(fields: {name: {eq: "contact"}}) {
            frontmatter {
              email
            }
            html
          }
    }
  `;
  export default ContactPage