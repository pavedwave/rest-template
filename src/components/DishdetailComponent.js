import React from 'react';
import { Card, CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({comments}) {

    if (comments != null) {
        const commentDishes = comments.map((comment) => {
            const commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))
            return (
                <li key={comment.id} className='comment-list-item'>
                    <div className='mb-2'>{comment.comment}</div>
                    <div className='mb-2'>--{comment.author} {commentDate}</div>
                </li>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul>
                    {commentDishes}
                </ul>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function RenderDish({dish}) {

    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width='100%' src={`/${dish.image}`} alt={dish.name} />
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card>
        </div>
    );
}

const DishDetail = (props) => {
    const { dish } = props;
    if (dish != null) {
        return (
            <div className="container">
            <div className ="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} /> 
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    } else {
        return <div />;
    }
}

export default DishDetail;