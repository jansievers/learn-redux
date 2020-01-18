const redux = require('redux');

const defaultState = {
    showCompleted: false,
    searchText: '',
    todos: []
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state
    }
};

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

let unsubscriber = store.subscribe(() => {
    let state = store.getState();
    console.log(state.searchText);
    document.getElementById("app").innerHTML = state.searchText;
});

let currentState = store.getState();

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'My search text'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Feed cat'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Clean up'
});
