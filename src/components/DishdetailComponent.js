import React from 'react';
import { Card, CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

function RenderComments({comments}) {

    if (comments != null) {
        const commentDishes = comments.map((comment) => {
            const commentDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))
            return (
                <li key={comment.id} >
                    <div className='mb-2'>{comment.comment}</div>
                    <div className='mb-2'>--{comment.author} {commentDate}</div>
                </li>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentDishes}
                </ul>
                <CommentForm />
            </div>
        );
    } else {
        return <div></div>;
    }
}

class CommentForm extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.createComment = this.createComment.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    createComment(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {  
        return(
            <React.Fragment>
                <Button onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment Form</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.createComment(values)}>

                            <Row className="form-group">
                                <Col md={12}>
                                <Label for="ratings">Rating</Label>
                                    <Control.select model=".ratings" defaultValue="5" id="ratings" name="ratings" 
                                        placeholder="Ratings"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".ratings"
                                        show="touched"
                                        messages={{
                                            required: 'Required- ',
                                            validEmail: 'Invalid Rating'
                                        }}
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={12}>
                                <Label for="yourname">Your Name</Label>
                                    <Control.text model=".yourname" id="yourname" name="yourname" 
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required- ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={12}>
                                <Label for="feedback">Submit Feedback</Label>
                                    <Control.textarea model=".feedback" id="feedback" name="feedback" 
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 12}}>
                                    <Button type="submit" color="dark">
                                    Submit Feedback
                                    </Button>
                                </Col> 
                            </Row>

                        </LocalForm>

                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
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