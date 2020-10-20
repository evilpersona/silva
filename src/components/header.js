import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import Logo from '../images/Logo.jpg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        padding: `.4rem .0875rem`,
      }}
    >

      <nav className="navbar navbar-expand-lg" style={{width:'100%'}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    Menu
  </button>
  <img src={Logo} className="logo" alt=""/>

      <h1>
        
        
          <span>The Art of</span>
          {siteTitle}
      </h1>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03" style={{float:'right'}}>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Rumsfeld3D</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/store">Store</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
