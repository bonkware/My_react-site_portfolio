import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Body from './components/body'
import About from './components/about'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
    <div id="header-page">
		<Header></Header>
		<div id="body-main">
		<Body></Body>
    <div id="about-main">
			<About></About>
    <div id="categories">
			<Footer></Footer>
          	</div>
            </div>
      	</div>
        </div>
    );
  }
}

export default App;
