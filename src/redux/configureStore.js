import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';// gives a reducer
import { InitialFeedback } from './forms';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({// writing like this to automatically bind the action creators of inbuit
                //react-redux-forms
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
        

    );

    return store;
}