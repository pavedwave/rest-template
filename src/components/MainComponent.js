import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { ITEMS } from '../shared/items';
import ItemDetail from './ItemdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ITEMS,
      selectedItem: null
    };
  }

  onItemSelect(itemId) {
    this.setState({ selectedItem: itemId });
  }

  render() {
    return (
      <div>
        <Navbar dark color="dark">
            <div className="container">
                <NavbarBrand href="/">Double J Saloon</NavbarBrand>
            </div>
        </Navbar>
        <Menu items={this.state.items} onClick={(itemId) => 
            this.onItemSelect(itemId)} />
        <ItemDetail item={this.state.items.filter((item) => 
            item.id === this.state.selectedItem )[0]} />
      </div>
    );
  }
}

export default Main;
