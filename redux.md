Redux

1. State - single JS object
	All mutations are explicit and can be kept track of

2. State tree is read only
	To change state, you need to dispatch an action
	Action is a JS object describing the change

	so,
	state - minimal data
	action - minimal change

	Action always has a type property and can't be undefined.
	component does not know about the change. It just dispatches an action.
	Any data that gets inside the Redux application gets there by actions.

3. Pure vs impure functions

	Pure functions - functions whose return values depend solely on the arguments. They don't have any side effects such as db or network calls.
	- They do not alter the values passed to them.
	Impure functions are the opposite of that.

4. Reducer

	State mutations need to be defined as a pure function. It has the previous state, action being dispatched, and the new state. This function is called the reducer.
	So if an action defines changes, a reducer is the change itself.

5. Store 

	A store has 3 methods:
	1. `getState()`: Retrieves the current state of the redux store
	2. `dispatch()`: Lets you change the state of your application
	3. `subscribe()`: Lets you register a callback which is called anytime an action has been dispatched. So you can update the UI.
