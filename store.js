// Implementing the store from scratch

const createstore = (reducer) => {
	let state; // store state in a variable

	const getState = () => state; // getState() returns the state

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach( listener => listener());
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	};

	dispatch({}); // populate initial state of reducer

	return { getState, dispatch, subscribe };
};