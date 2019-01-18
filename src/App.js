import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
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
        <Menu dishes={this.state.dishes} />
        <DishDetail dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
