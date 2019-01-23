import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Menu component render is invoked');
        const menu = this.props.items.map((item) => {
            return (
                <div className="col-12 col-md-5 m-1" key={item.id}>
                    <Card key = {item.id} onClick={() => this.props.onClick(item.id)}>
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
                <div className="row">{menu}</div>
            </div>
        );
    }
}
export default Menu;