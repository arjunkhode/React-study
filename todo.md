https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store

You can reset the state of a redux store

__
UNDO REDO
__

onClick = {(event) => {console.log(event.target.value)}}

__

State:

this.state = {term: "wassup"} // manually change state only inside constructor
onChange = {event => this.setState(term: event.target.value)} // re-renders
Value of the input is {this.state.term}


Export default - default means the 'main' exported value in the module.
There can be only one export default per module