import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Currency from 'react-currency-formatter';


const SecondPage = ({ data }) => {
  const posts = data.allRandomUser.edges.map(({ node }) => ({
    html: node.html,
    ...node
  }));
  return (
  <Layout>
    
    <SEO title="Store" />
    <div className="container content-wrap">
    <div className="row">
    {posts.map((post,index) => (
      <div className="col-md-4 col-sm-12 card text-center mb-4 clearfix" key={index}>
        <img src={post.picture.large.photo._400sq} className="card-img-top"/>
        <div className="card-body">
        <h5 className="card-title">{post.name}</h5>
        <span className="price card-text"><Currency
  quantity={post.price}
  currency="USD"
/></span><br />
        <a href={post.url} className="btn btn-primary">Shop Now</a>
        </div>
      </div>
    ))}
    </div>
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
