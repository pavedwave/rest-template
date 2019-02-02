import React from 'react';
import { Card, CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem, Nav, NavItem, Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

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
                <CommentForm />
            </div>
        );
    } else {
        return <div></div>;
    }
}

// https://fontawesome.com/v4.7.0/examples/

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

    createComment(event) {
        this.toggleModal();
        alert("Rating: " + this.rating.value + "Yourname: " + this.yourname.value + " Comment: " + this.comment.value);
        event.preventDefault();
    }

    render() {  
        return(
            <React.Fragment>

                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Button onClick={this.toggleModal}>
                                            <span className="fa fa-pencil fa-lg"></span> Submit Comment
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment Form</ModalHeader>
                    <ModalBody>

                        <Form onSubmit={this.createComment}>   {/* <== is that benign comment? */}

                        {/* <LocalForm onSubmit={(values) => this.createComment(values)}> */}
{/*                             <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <FormControl as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                <Input type="rating" id="rating" name="rating" 
                                    innerRef={(input) => this.rating = input} />
                                </FormControl>
                            </FormGroup> */}

                            <FormGroup>
                                <Label htmlFor="yourname">Your Name</Label>
                                <Input type="text" id="yourname" name="yourname" 
                                    innerRef={(input) => this.yourname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="message" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" 
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </FormGroup>
                            <Button type="submit" value="submit" color="bg-dark">Submit</Button>
                         </Form>
                        {/* </LocalForm> */}
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