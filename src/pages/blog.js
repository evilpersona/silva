import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mailchimp from 'react-mailchimp-form'

const url = 'https://christophersilva.us2.list-manage.com/subscribe/post?u=e5851b390a8d9ccee14df9aa4&amp;id=27935e4347';

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
              <div className="col-lg-4 col-sm-12">
              <script id="mcjs" dangerouslySetInnerHTML={{ __html:
            
          `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e5851b390a8d9ccee14df9aa4/364288f9eaf10db500ab93b81.js");`}} />
              </div>
          {posts.map((post,index) => (
              <div key={index} className="row">
                  <div className="col-lg-8 mr-auto ml-auto mb-2">
                      <h3 className="text-center"><Link to={post.path}>{post.title}</Link></h3>
                      <img src={post.featured_image} className="img-fluid float-left mr-4" />
                      <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </div>
                  <div className="border-bottom col-lg-12 mb-3"></div>
              </div>
          ))}
          <div className="col-lg-8 mr-auto ml-auto mb-2 text-center">
              <h4>Newsletter Signup</h4>
          <Mailchimp
        action={url}
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
            className: 'form-control ',
          }
        ]}
        className="form-group form-inline"/>
          </div>
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