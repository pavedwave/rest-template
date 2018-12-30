import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        const menu = this.props.items.map((item) => {
            return (
                <div key = {item.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={item.image} alt={item.name} />
                        </Media>
                        <Media body classname="ml-5">
                            <Media heading>{item.name}</Media>
                            <p>{item.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return ( 
            <div classname="container">
                <div classname="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;