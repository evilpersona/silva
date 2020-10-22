import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

/*
  This is used in blog posts. The index page can be found at src/pages/blog.js
*/

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
                <h1 className="mb-0">{frontmatter.title}</h1>
                    <div className="col-lg-8 mr-auto ml-auto">
                    <img src={frontmatter.featured_image} />
                    </div>
                    
            </div>
            <div className="col-lg-8 mr-auto ml-auto">
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                  <Link to="/blog">Back to Blog</Link>
                  </div>
                 
        </div>
              
          </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($name: String!) {
    markdownRemark(
      fields: {
        sourceName: { eq: "blog" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        author
        featured_image
        date
        title
      }
    }
  }
`;

export default BlogPost;
