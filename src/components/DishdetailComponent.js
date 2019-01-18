import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';   

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('DishDetail component constructor is invoked');
    }

    componentDidMount() {
        console.log('DishDetail component componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        console.log('Dishdetail renderDish is invoked');
        if (dish != null) {
            this.dish.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1 xs=1 sm=1">
                    <div className = "row">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>  
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )})
        } else {
            return(
                <div></div>
            );
        }
    }

    renderComment(dish) {
        console.log('Dishdetail renderComment is invoked');
        if (dish != null) {
            return (
                <div className="col-12 col-mt-5">
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>   
                            <CardText>
                                <ul>
                                    {dish.map((comments) => {  
                                        return (                  
                                        <li key={comments.id}><p>{dish.comments.comment}</p>--{dish.comments.author}
                                            {dish.comments.date}</li> 
                                        );
                                    })};
                                </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        console.log('Dishdetail component render is invoked');
            return (
                <div className='row'>
                     {this.renderDish(this.props.shareddish)}
                     {this.renderComment(this.props.shareddish)}
                </div>
            );
    }
}

export default DishDetail;