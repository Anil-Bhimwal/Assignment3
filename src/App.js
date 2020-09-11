import React, { Component } from 'react';
import './App.css';
import NavbarComponent from './components/Navbar';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Menu dishes={this.state.dishes}/>
      </div>
    )
  }

}


export default App;
