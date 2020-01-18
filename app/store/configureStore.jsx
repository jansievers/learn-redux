const redux = require('redux');
const thunk = require('redux-thunk').default;

const {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

export const configure = () => {
    const reducer = redux.combineReducers({
        name: nameReducer,
        hobbies: hobbiesReducer,
        movies: moviesReducer,
        map: mapReducer
    });

    const store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};

