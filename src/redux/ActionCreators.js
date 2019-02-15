import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// THINGS

export const fetchThings = () => (dispatch) => {
    dispatch(thingsLoading(true));

    return fetch(baseUrl + 'things')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(things => dispatch(addThings(things)))
        .catch(error => dispatch(thingsFailed(error.message)));
}

export const thingsLoading = () => ({
    type: ActionTypes.THINGS_LOADING
});

export const thingsFailed = (errmess) => ({
    type: ActionTypes.THINGS_FAILED,
    payload: errmess
});

export const addThings = (things) => ({
    type: ActionTypes.ADD_THINGS,
    payload: things
});

// COMMENTS

export const postComment = (thingId, rating, author, comment) => (dispatch) => {

    const newComment = {
        thingId: thingId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('Post comments', error.message);
            alert('Your comment could not be posted\nError: ' + error.message); });
};

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        // Below creates "Failed to Fetch"
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// PROMOTIONS

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

// EMPLOYEES

export const fetchEmployees = () => (dispatch) => {
    dispatch(employeesLoading(true));

    return fetch(baseUrl + 'employees')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(employees => dispatch(addEmployees(employees)))
        .catch(error => dispatch(employeesFailed(error.message)));
}

export const employeesLoading = () => ({
    type: ActionTypes.EMPLOYEES_LOADING
});

export const employeesFailed = (errmess) => ({
    type: ActionTypes.EMPLOYEES_FAILED,
    payload: errmess
});

export const addEmployees = (employees) => ({
    type: ActionTypes.ADD_EMPLOYEES,
    payload: employees
});

// FEEDBACK

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, feedback) => () => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        feedback: feedback
    };
   // newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(feedback => alert(JSON.stringify(feedback)))
        .catch(error => { console.log('Post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message); });
};