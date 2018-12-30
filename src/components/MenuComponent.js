import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedItem: null
        }
    }

    onItemSelect(item) {
        this.setState({ selectedItem: item });
    }

    renderItem(item) {
        if (item != null) {
            return(
                <Card>
                    <CardImg top src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>(item.name)</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.items.map((item) => {
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

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderItem(this.state.selectedItem)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;