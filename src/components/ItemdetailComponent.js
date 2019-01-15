import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class ItemDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        }
        console.log('ItemDetail component constructor is invoked');
    }

    componentDidMount() {
        console.log('ItemDetail component componentDidMount is invoked');
    }

    onItemSelect(item) {
        this.setState({ selectedItem: item });
    }

    renderItem(item) {
        if (item != null) {
            return(
                <div>
                {this.props.itemdetail.map((items) => {
                    return(
                        <li key={items.id}>{item.name}{item.description}</li>
                    );
                })}</div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            <ItemDetail details={this.props.comments} />
        );
        console.log('Itemdetail component render is invoked');
    }
}

export default ItemDetail;