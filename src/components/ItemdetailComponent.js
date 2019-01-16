import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';   

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
        console.log('Itemdetail renderItem is invoked');
        if (item != null) {
            return (
                <div>
                    <Card>
                        <CardImg top src={item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.description}</CardText>  
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

    renderComment(item) {
        console.log('Itemdetail renderComment is invoked');
        if (item != null) {
            return (
                <div className="col-12 col-mt-5">
                    <Card>
                        <CardBody>
                            <CardTitle>Comments</CardTitle>
                            <CardText>
                                <ul>
                                    {this.props.items.map((comments) => {  
                                        return (                  
                                        <li key={comments.id}><p>{item.comments.comment}</p>--{item.comments.author}
                                            {item.comments.date}</li> 
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
        console.log('Itemdetail component render is invoked');
            return (
                <div className='row'>
                    {this.renderItem(this.props.item)}
                    {this.renderComment(this.props.items.comment)}
                </div>
            );
    }
}

export default ItemDetail;