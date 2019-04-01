import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TEST_DATA from './issues_test_data.json';

const clientId = process.env.REACT_APP_CLIENT_ID;
const DEBUG = true;

class App extends Component {
  constructor() {
    super();
    // const state = {};
    // Standard local flow.
    // if(process.env.NODE_ENV    == 'development') {
    //   let token = this.logInOrRedirect();
    //   this.state = {
    //     token: token
    //   }
    // } else {
    //   // Call the Netlify Library.
    // }


    this.state = {
      issues: []
    }
}

  async fetchIssues() {
    if(DEBUG) {
      let json = TEST_DATA;
      this.setState({
        issues: json
      })
    } else {
      const url = 'https://api.github.com/repos/facebook/react/issues?access_token=' + this.state.token;
      let resp = await fetch(url);
      let json = await resp.json();
      this.setState({
        issues: json
      });
  
    }
  }

  async componentDidMount() {
    this.fetchIssues();
    
  }

  render() {
    return (
      <div className="App">
        <h1> Hello World: {process.env.NODE_ENV} </h1>
        { this.state.issues.map(issue => <li>{issue.title}</li>)}
      </div>
    );
  }
}

export default App;
