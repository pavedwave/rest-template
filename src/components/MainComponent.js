import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import ThingDetail from './ThingdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postFeedback, postComment, fetchThings, fetchComments, fetchPromos, fetchEmployees }  from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    things: state.things,
    comments: state.comments,
    promotions: state.promotions,
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch) => ({
  postFeedback: (firstname, lastname, telnum, email, agree, contactType, feedback) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, feedback)),
  postComment: (thingId, rating, author, comment) => dispatch(postComment(thingId, rating, author, comment)),
  fetchThings: () => {dispatch(fetchThings())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchEmployees: () => {dispatch(fetchEmployees())}
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchThings();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchEmployees();
  }

  render() {

    const HomePage = () => {
      return(
        <Home thing={this.props.things.things.filter((thing) => thing.featured)[0]}
        thingsLoading={this.props.things.isLoading}
        thingsErrMess={this.props.things.errMess}

        promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]} 
        promosLoading={this.props.promotions.isLoading}
        promosErrMess={this.props.promotions.errMess}

        employee={this.props.employees.employees.filter((employee) => employee.featured)[0]} 
        employeesLoading={this.props.employees.isLoading}
        employeesErrMess={this.props.employees.errMess}
        />
      );
    }

    const ThingWithId = ({match}) => {
      return(
        <ThingDetail thing={this.props.things.things.filter((thing) => thing.id === parseInt(match.params.thingId,10))[0]}
        isLoading={this.props.things.isLoading}
        errMess={this.props.things.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.thingId === parseInt(match.params.thingId,10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        />
      )
    }

    return (
      <div>
        <Header />
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/aboutus' component={() => <About employees={this.props.employees} />} />} />
                  <Route exact path='/menu' component={() => <Menu things={this.props.things} />} />
                  <Route path='/menu/:thingId' component={ThingWithId} />
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
