import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import Logo from '../images/Logo.jpg';

const Header = ({ siteTitle }) => (
  <header className="container-fluid"
    style={{
      background: `white`,
      marginBottom: `0`,
      paddingTop: `10px`
    }}
  >
    <div className="row col-lg-12">
  <div className="col-lg-7 left-side col-sm-12">
    <div className="col-sm-12 clearfix-sm">
  <img src={Logo} className="logo" alt=""/>
  </div>
  <div className="col-sm-12">
<h1>
    <span>The Art of</span><br />
    {siteTitle}
</h1>
</div>
  </div>
  <div className="col-lg-3 align-middle text-center right-side col-sm-12">
      <nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler text-sm-center" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" style={{margin: '0 auto'}}>
    Menu
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://rumsfeld3d.com" target="_blank">Rumsfeld3D</a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/store">Store</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
</div>
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
