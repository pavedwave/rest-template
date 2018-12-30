import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { ITEMS } from './shared/items';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ITEMS
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="dark">
            <div className="container">
                <NavbarBrand href="/">Double J Saloon</NavbarBrand>
            </div>
        </Navbar>
        <Menu items={this.state.items} />
      </div>
    );
  }
}

export default App;
