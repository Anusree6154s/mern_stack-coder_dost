# useReducer

<h2 style='color:#416D19'>Comparing useState and useReducer</h2>

- const [state, setState] = useState(initialState)
- const [state, dispatch] = useReducer(reducerFunctionName, initialState)

Comparing both we get to kknow that dispatch acts just like setState does. 
useReducer is used when we use the same useState in more than one place

<h2 style='color:#416D19'>Syntax</h2>

```javascript
import React, { useReducer } from "react";

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // Initial state
  const initialState = { count: 0 };

  // useReducer hook
  const [state, dispatch] = useReducer(
    counterReducer,
    initialState,
    initializer
  );

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  );
};

export default Counter;
```

<h2 style='color:#416D19'>Example</h2>

```javascript
import React, { useReducer } from "react";

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
const incrementAction = () => ({ type: INCREMENT });
const decrementAction = () => ({ type: DECREMENT });

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // Initial state
  const initialState = { count: 0 };

  // useReducer hook
  const [state, dispatch] = useReducer(
    counterReducer,
    initialState,
    (initialState) => {
      return { count: initialState.count * 2 }; // Custom initializer function
    }
  );

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  );
};

export default Counter;
```


