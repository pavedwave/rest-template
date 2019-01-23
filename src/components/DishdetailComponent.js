import React from 'react';
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';

    componentDidMount() {
        console.log('DishDetail ComponentDidMount invoked.');
    }

    componentDidUpdate() {
        console.log('DishDetail ComponentDidUpdate invoked.');
    }

    function RenderComments({comments}) {

        console.log('DishDetail renderComments invoked.');

        if (comments != null) {
            const commentDishes = comments.map((comment) => {
                const commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
                return (
                        <li key={comment.id} className='comment-list-dish'>
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
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
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
                <div className='row'>
                    <RenderDish dish={props.dish} /> 
                    <RenderComments comments={props.dish.comments} />
                </div>
            );
        } else {
            return <div />;
        }
    }
}
export default DishDetail;