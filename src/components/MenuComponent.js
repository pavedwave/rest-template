import React, { Component, ItemDetail } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        }
        console.log('Menu component constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu component componentDidMount is invoked');
    }

    onItemSelect(item) {
        this.setState({ selectedItem: item });
    }

    renderItem(item) {
        console.log('Menu component renderItem is invoked');
        if (item != null) {
            return(
            <div className="container col-12 col-md-5">
                <div className="row">
                    {ItemDetail}  
                </div>
            </div>
            );
        }
        else {
            return(
                <div>testing -- undefined</div>
            );
        }
    }

    render() {
        console.log('Menu component render is invoked');
        const menu = this.props.items.map((item) => {
            return (
                <div className="col-12 col-md-5 m-1 xs=1 sm=1">
                    <Card key = {item.id} 
                    onClick={() => this.onItemSelect(item)}>
                        <CardImg width="100%" src={item.image} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                    <ItemDetail shareditem={this.state.selectedItem} />
                </div>
            );
        });

        return ( 
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderItem(this.state.selectedItem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;