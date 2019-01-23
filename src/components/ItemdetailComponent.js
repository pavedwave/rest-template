import React from 'react';
import { Card, CardTitle, CardText, CardImg } from 'reactstrap';

function RenderComments({comments}) {

    console.log('ItemDetail renderComments invoked.');

    if (comments != null) {
        const commentItemes = comments.map((comment) => {
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
                    {commentItemes}
                </ul>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function RenderItem({item}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width='100%' src={item.image} alt={item.name} />
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </Card>
        </div>
    );
}

const ItemDetail = (props) => {
    const { item } = props;
    if (item != null) {
        return (
            <div className='row'>
                <RenderItem item={props.item} /> 
                <RenderComments comments={props.item.comments} />
            </div>
        );
    } else {
        return <div />;
    }
}

export default ItemDetail;