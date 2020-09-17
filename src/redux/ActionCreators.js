import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
// Redux documentation standard, with good practices
// Keep the actions in a separate file
// and import them into the Creator, invoking them
// as an object containing (type :) File.ACTION and inserting all
// the data and information of that action in (payload :),
// which functions as an array.map

// Actions are sent to the ConfigureStore, where it is chosen
// which state it will act in, and are also sent to the file
// containing the state in which it will act.

// MainComponent receives the actions from this file.
//for dishes action creators
export const fetchDishes = () => (dispatch) => {// react thunk returning a function

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
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
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


// COMMENTS
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
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
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};

// PROMOTIONS

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
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


// LEADERS Action creators
export const fetchLeaders = () => (dispatch) => {
    return fetch(baseUrl + "leaders")
        .then(
            (response) => {
                if (response.ok) {
                    return response
                } else {
                    var error = new Error(
                        "Error" + response.status + ":" + response.statusText
                    )
                    error.response = response
                    throw error
                }
            },
            (error) => {
                var errorMessage = new Error(error.message) // if there is no response from the server.
                throw errorMessage
            }
        )
        .then((response) => response.json())
        .then((leaders) => dispatch(addLeaders(leaders)))
        .catch((error) => dispatch(leadersFailed(error.message)))
}

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders,
})
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING,
})

export const leadersFailed = (err) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: err,
})


// FEEDBACK

export const userFeedBack = (feedback) => ({
    type: ActionTypes.USER_FEEDBACK,
    payload: feedback,
  })
  
  export const postFeedBack = (
    firstName,
    lastName,
    telNumber,
    email,
    agreeToContact,
    contactType,
    message
  ) => (dispatch) => {
    const newFeedBack = {
      firstName: firstName,
      lastName: lastName,
      telNumber: telNumber,
      email: email,
      agreeToContact: agreeToContact,
      contactType: contactType,
      message: message,
    }
  
    newFeedBack.date = new Date ().toISOString()
  
    return fetch (baseUrl + "feedback", {
      method: "POST",
      body: JSON.stringify (newFeedBack),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then (
        (response) => {
          if (response.ok) {
            return response
          } else {
            var error = new Error ("Error:" + response.status)
            error.response = response
            throw error
          }
        },
        (error) => {
          var err = new Error (error.message)
          throw err
        }
      )
      .then ((response) => response.json ())
      .then ((response) => dispatch (userFeedBack (response)))
      .catch ((error) => console.log ("Post feedback", error.message))
  }