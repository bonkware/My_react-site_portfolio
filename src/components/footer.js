import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-top footer-padding">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="footer-top-cap text-center">
                  <img src="assets/img/logo/logo2_footer.png" alt="" />
                  <p>My portfolio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="footer-copy-right">
                  <p>
                    Copyright ©2020 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="footer-social f-right">
                  <a>Stay Connected</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
}