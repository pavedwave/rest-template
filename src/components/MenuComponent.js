import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ item }) {
    return(
        <Card>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

const Menu = (props) => {

    const menu = props.items.map((item) => {
        return (
            <div key={item.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem item={item} />
            </div>
        );
    });
    return ( 
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}
export default Menu;