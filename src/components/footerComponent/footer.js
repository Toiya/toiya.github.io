import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="phantomStyle" />
        <footer>
          <div className="icons">
            <div className="centered">
              <a href="https://github.com/toiya">
                <i className="fa fa-github-square fa-3x"></i>
              </a>
              <a href="https://linkedin.com/in/elvira-häggström-84280a15a">
                <i className="fa fa-linkedin-square fa-3x"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
