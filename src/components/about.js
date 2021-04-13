import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <section className="categories-area section-padding3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-tittle mb-70">
                <h1>What Services you will Get from me!</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-pen" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Mobile app design and development</a></h5>
                  <p>Android development and design of mobile apps.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-speaker" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Web applications development</a></h5>
                  <p>Design and development of data driven web applications.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-portfolio" />
                </div>
                <div className="cat-cap">
                  <h5><a href="services.html">Web Dashboards</a></h5>
                  <p>Design and development of data driven web applications dashboards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
}