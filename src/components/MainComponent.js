import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
        <Header />
        <Menu items={this.state.items} onClick={(itemId) => 
            this.onItemSelect(itemId)} />
        <ItemDetail item={this.state.items.filter((item) => 
            item.id === this.state.selectedItem )[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
