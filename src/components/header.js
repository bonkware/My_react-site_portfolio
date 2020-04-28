import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header-area">
      <div className="main-header  header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-md-1">
              <div className="logo">
                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="menu-main d-flex align-items-center justify-content-end">
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About</a></li>
                      <li><a href="services.html">Services</a></li>
                      <li><a href="portfolio.html">Portfolio</a></li>
                      <li><a href="#">Page</a>
                        <ul className="submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                          <li><a href="elements.html">Element</a></li>
                          <li><a href="portfolio_details.html">Portfolio Details</a></li>
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>                
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"><div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{outline: 'currentcolor none medium'}}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><ul className="slicknav_nav slicknav_hidden" style={{display: 'none'}} aria-hidden="true" role="menu">
                    <li><a href="index.html" role="menuitem" tabIndex={-1}>Home</a></li>
                    <li><a href="about.html" role="menuitem" tabIndex={-1}>About</a></li>
                    <li><a href="services.html" role="menuitem" tabIndex={-1}>Services</a></li>
                    <li><a href="portfolio.html" role="menuitem" tabIndex={-1}>Portfolio</a></li>
                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{outline: 'currentcolor none medium'}} /><a href="#" tabIndex={-1}>Page</a>
                      <span className="slicknav_arrow">+</span><ul className="submenu slicknav_hidden" role="menu" style={{display: 'none'}} aria-hidden="true">
                        <li><a href="blog.html" role="menuitem" tabIndex={-1}>Blog</a></li>
                        <li><a href="blog_details.html" role="menuitem" tabIndex={-1}>Blog Details</a></li>
                        <li><a href="elements.html" role="menuitem" tabIndex={-1}>Element</a></li>
                        <li><a href="portfolio_details.html" role="menuitem" tabIndex={-1}>Portfolio Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html" role="menuitem" tabIndex={-1}>Contact</a></li>
                  </ul></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}