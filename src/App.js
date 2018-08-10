import React, { Component } from 'react';
import Dashboard from "./components/Dashboard/Dashboard"
import Form from "./components/Form/Form"
import axios from 'axios'
import Header from "./components/Header/Header"
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [],
      selectedProduct: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount(){
      this.getInventory();
  }
  getInventory(){
    axios.get("/api/inventory")
      .then((response) => {
       this.setState({inventory: response.data})
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard products={this.state.inventory} getInventory={this.getInventory()}/>
        <Form />
      </div>
    );
  }
}

export default App;
