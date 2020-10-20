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
  className: "slider variable-width",
  dots: false,
  infinite: true,
  speed: 500,
  autoplay:false,
  arrows: true,
  centerMode: true,
  slidesToShow: 1,
  variableWidth: true,
  slidesToScroll: 1,
  lazyload:true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter
  }));
  return (
  <Layout>
    <SEO title="Home" />
    <Slider {...settings}>
    {posts.map((post,index) => (
      <div key={index} style={{ width: `${post.width}px` }}> 
        <img src={post.featured_image} />
        </div>
    ))}
    </Slider>
  </Layout>
)
  };
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "portfolio" } } }
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
export default IndexPage
