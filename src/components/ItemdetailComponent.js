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
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const itemdetail = this.props.items.map((item) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key = {item.id} 
                    onClick={() => this.onItemSelect(item)}>
                        <CardImg width="100%" src={item.image} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Itemdetail component render is invoked');

        return ( 
            <div className="container">
                <div className="row">
                    {itemdetail}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderItem(this.props.selectedItem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetail;