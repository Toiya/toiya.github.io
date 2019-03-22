import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'
import About from './components/pages/about'
import Projects from './components/pages/projects'
import Post from './components/post'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="content">

            <Header />

            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/posts/:post_id" component={Post}/>

          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
