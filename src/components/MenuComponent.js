import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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
        if (item != null) {
            return(
                <div>
                    <Card>
                        <CardImg top src={item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>  
                        </CardBody>
                    </Card>
                                       **  POSITION COMMENT CARD SIDE BY SIDE  **
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>  // HOW TO PASS ITEMS (COMMENTS) AS PROPS
                            <CardText>
                                <div>
                                {this.props.items.map((comments) => {
                                    return (
                                    <li>{item.comments.comment} - {item.comments.author}</li>  
                                    );
                                })}
                                </div>
                            </CardText>
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
                </div>
            );
        });
        console.log('Menu component render is invoked');

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