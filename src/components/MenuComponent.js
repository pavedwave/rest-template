import React, { Component, DishDetail } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Menu component constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        console.log('Menu component renderDish is invoked');
        console.log(this.state.selectedDish);
        if (dish != null) {
            return(
            <div className="container col-12 col-md-5">
                <div className="row">
                    {dish}  
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

        const menu = this.state.dish.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1 xs=1 sm=1">
                    <Card key = {dish.id} 
                    onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>

                    <DishDetail shareddish={this.state.selectedDish} />
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
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;