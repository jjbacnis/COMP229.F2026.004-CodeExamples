import React, {useReducer} from 'react';

// Define a reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function IncrementDecrement() {
    // Initialize state using useReducer
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <h3>Increment/Decrement Component</h3>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    )
}

export default IncrementDecrement;