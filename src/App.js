import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Charles-Zada</h1>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;
