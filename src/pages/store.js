import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const SecondPage = ({ data }) => {
  const posts = data.allRandomUser.edges.map(({ node }) => ({
    html: node.html,
    ...node
  }));
  return (
  <Layout>
    
    <SEO title="Store" />
    <div className="row">
    {posts.map((post,index) => (
      <div className="col-md-4 col-sm-12 text-center mb-4 clearfix" key={index}>
        <a href={post.url}>{post.name}</a><br />
        <img src={post.picture.large.photo._400sq} />
        <span className="price">${post.price}</span>
      </div>
    ))}
    </div>
  </Layout>
)
  };
export const pageQuery = graphql`
  query {
    allRandomUser {
      edges {
        node {
          url
          name
          description
          price
          picture {
            large {
              photo {
                _400sq
              }
            }
          }
        }
      }
    }
  }
`;
export default SecondPage
