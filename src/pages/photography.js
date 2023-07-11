import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    />
  );
}

var settings = {
  className: "slider ",
  dots: false,
  infinite: true,
  speed: 2000,
  autoplay:true,
  arrows: true,
  centerMode: true,
  slidesToShow: 1,
  variableWidth: true,
  slidesToScroll: 1,
  lazyload:true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const PhotoPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter
  }));
  console.log(data);
  return (
  <Layout>
    <SEO title="Photography" />
    {posts && 
    <>
    <Slider {...settings} className="d-sm-none d-none d-lg-block d-md-block d-xl-block">
    {posts.map((post,index) => (
      <div key={index}> 
        <img src={post.featured_image} className="img-fluid" />
        </div>
    ))}
    </Slider>
    <div className="row d-lg-none d-md-none d-xl-none" style={{margin: '0 auto'}}>
    {posts.map((post,index) => (
      <div key={index} className="col-sm-12"> 
        <img src={post.featured_image} className="img-fluid" />
        </div>
    ))}
    </div>
    </>
    }
  </Layout>
)
  };
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "photography" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            featured_image
            date
            title
            width
          }
          fields {
            name
          }
        }
      }
    }
  }
`;
export default PhotoPage
