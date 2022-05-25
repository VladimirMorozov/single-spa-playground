// simple pub-sub which saves the state and immediatelly gives it to new subscribers
let states = {};

window.StatePubSub = {
    registerState: function(stateName, initialState) {
        console.log('reg', stateName);
        let subscribers = [];
        let isStateSubscribedTo = states[stateName] && !states[stateName].initialized;
        // allow to subscribe before registration happens
        if (isStateSubscribedTo) {
            subscribers = states[stateName].subscribers;
        }

        states[stateName] = {
            initialized: true,
            state: initialState,
            subscribers
        }

        if (isStateSubscribedTo) {
            states[stateName].subscribers.forEach(s => s(initialState));
        }
    },
    dispatchStateChange: function(stateName, newState) {
        console.log('disp', stateName);
        let state = states[stateName];
        state.state = newState;
        state.subscribers.forEach(s => s(newState));
    },
    subscribeToState: function(stateName, callback) {
        console.log('sub', stateName);
        let state = states[stateName];
        if (!state) {
            states[stateName] = {
                initialized: false,
                subscribers: [callback]
            }
        } else {
            state.subscribers.push(callback);
            callback(state.state);
        }
        return states[stateName].subscribers.length - 1;
    },
    unsubscribeFromState: function(stateName, index) {
        console.log('unsub', stateName);
        states[stateName].subscribers.splice(index, 1);
    }
}

    