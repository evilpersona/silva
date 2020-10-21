import React from "react";
import SocialLinks from '../settings/social.yml';


const Footer = ({ siteTitle }) => (
<footer className="container"
style={{
          marginTop: `1rem`,
          paddingLeft: '2rem',
          paddingBottom: '.4em'
        }}>
            <ul className="socialLinks">
          {SocialLinks.socialLinks.map((post,index) => (
              <li key={index}>
                  <a href={post.linkURL}><img src={post.image} alt={post.imageAlt} /></a>
              </li>
          ))}
          </ul>
          <div className="float-right site-tag"><em>site by <a href="https://collaretadesigns.com" target="_blank">collaretadesigns</a></em></div>
        </footer>
)



export default Footer