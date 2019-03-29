import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TEST_DATA from './issues_test_data.json';

const clientId = process.env.REACT_APP_CLIENT_ID;
const DEBUG = true;

class App extends Component {
  constructor() {
    super();
    const state = {};
    const existingToken = sessionStorage.getItem('token');
    const accessToken = (window.location.search.split("=")[0] === "?access_token") ? window.location.search.split("=")[1] : null;
    if (!accessToken && !existingToken) {
      window.location.replace(`https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`)
    }
    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`);
  
      sessionStorage.setItem("token", accessToken);
      state.token = accessToken;
    }
  
    if (existingToken) {
      state.token = existingToken;

    }    

    this.state = {
      issues: [],
      token: state.token
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
