const actions = require('./actions/index');
const store = require('./store/configureStore').configure();

// Subscribe
const unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log(store.getState());

    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url) {
        document.getElementById('app').innerHTML =
            `<a target="_blank" href="${state.map.url}">View your location</a>`;
    }
});
//unsubscribe();

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('TV'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Jan'));

store.dispatch(actions.addMovie('Terminator', 'Action'));
store.dispatch(actions.addMovie('Star Trek', 'Scifi'));
store.dispatch(actions.removeMovie(2));